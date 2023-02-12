import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";


import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignIn() {    
    const { signIn, isLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        signIn({ email, password });

        }


    return(
        <Container>

            <motion.div
            className="transitionAnimate"
            initial={{ rotate: -180, opacity: 0, scale: 0.5}}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            >
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <main>
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

                {isLoading ? (
                <div className="loading">
                    <RotatingLines
                    strokeColor="#FF859B"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
                </div>
                ) :
                (
                    <>
                    <Button
                    title="Entrar"
                    onClick={handleSignIn}
                    />


                    <footer>
                    <Link to="/register" className="createAccount" >Criar conta</Link>
                    </footer>
                    </>
                )}

                
            </Form>
            </motion.div>

            <Background/>
        </Container>
    )
}