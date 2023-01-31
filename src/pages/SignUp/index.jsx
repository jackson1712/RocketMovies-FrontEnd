import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
 
export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <main>
                <Input icon={FiUser} type="text" placeholder="Nome"/>
                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Senha"/>
                </main>

                <Button title="Cadastrar" />

                <footer>
                <ButtonText icon={FiArrowLeft} title="Voltar para login" className="return"/>
                </footer>
            </Form>

            <Background/>
        </Container>
    )
}