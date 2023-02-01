import { Container, Profile, Span } from "./styles";
import { Input } from "../Input";
import { TitlePage } from "../TitlePage";

export function Header() {
    return(
        <Container>
                <TitlePage title="RocketMovies"/>
                <Input placeholder="Pesquisar por título"/>

                <main>
                    <Span>
                        <h2>Jackson Moura</h2>
                        <button type="button">Sair</button>
                    </Span>
                <Profile to="/profile">
                    <img 
                    src="https://github.com/jackson1712.png" 
                    alt="imagem de perfil" 
                    />
                </Profile>
                </main>
        </Container>
    );
}