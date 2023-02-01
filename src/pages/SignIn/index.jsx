import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <main>
                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Senha"/>
                </main>

                <Button title="Entrar" />
                
                <footer>
                <Link to="/register" className="createAccount" >Criar conta</Link>
                </footer>
            </Form>

            <Background/>
        </Container>
    )
}