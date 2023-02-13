import { useState } from "react";
import { api } from "../../services/api";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
 
export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSignUp(){
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }
            setLoading(true)
            api.post("/users", {name, email, password})
            .then(() => {
                setLoading(false)
                toast("Conta criada com sucesso!", {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(-1)
            })
            .catch(error => {
            if(error.response){
                setLoading(false)
                toast.error(`${error.response.data.message} 😞`, {
                    position: toast.POSITION.TOP_CENTER
                });
            }else{
                setLoading(false)
                toast("Não foi possível cadastrar usuário", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        });
    }

    const navigate = useNavigate();

    function handleBackSignIn() {
        return navigate(-1)
    }

    return(
        <Container>

            <motion.div
            className="transitionAnimate"
            initial={{ rotate: 180, opacity: 0, scale: .5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: .3 }}
            >

            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <main>
                <Input 
                icon={FiUser} 
                type="text" 
                placeholder="Nome"
                onChange={e => setName(e.target.value)}
                />

                <Input 
                icon={FiMail} 
                type="text" 
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                icon={FiLock}
                type="password" 
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                />

                </main>

                {loading ?
                (
                    <div className="loading">
                    <RotatingLines
                    strokeColor="#FF859B"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
                    </div>
                ) : (
                <>
                    <Button 
                    title="Cadastrar" 
                    onClick={handleSignUp}
                    />

                    <footer>
                    <ButtonText
                    icon={FiArrowLeft} 
                    title="Voltar para login" 
                    className="return"
                    onClick={handleBackSignIn}
                    />
                    </footer>
                    </>
                )
                }

            </Form>

            </motion.div>
            <Background/>
        </Container>
    )
}