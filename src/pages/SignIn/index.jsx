import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <main>
                <Input type="text" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha"/>
                </main>

                <ButtonText title="Entrar" />
                
                <footer>
                <Link to="/register" className="createAccount">
                    Criar conta
                </Link>
                </footer>
            </Form>

            <Background/>
        </Container>
    )
}