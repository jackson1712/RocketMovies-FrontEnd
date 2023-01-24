import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <main>
                <Input type="text" placeholder="Nome"/>
                <Input type="text" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha"/>
                </main>

                <button>Cadastrar</button>

                <footer>
                <FiArrowLeft/>
                <Link to="/" className="return">Voltar para login</Link>
                </footer>
            </Form>

            <Background/>
        </Container>
    )
}