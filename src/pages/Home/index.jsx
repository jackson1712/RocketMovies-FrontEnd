import { Link } from "react-router-dom";
import { Container, NewMovie, Content } from "./styles";
import { RxPlus } from "react-icons/rx";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

export function Home() {
    return(
        <Container>
    
            <Header/>

            <Content>
            <header>
                <h1>Meus filmes</h1>
                <NewMovie to="/newmovie"><RxPlus/>Adicionar filme</NewMovie>
            </header>

            <Note/>
            <Note/>
            <Note/>

            </Content>

        </Container>
    )
}