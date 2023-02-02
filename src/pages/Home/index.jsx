import { Container, NewMovie, Content, Menu } from "./styles";
import { RxPlus } from "react-icons/rx";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { ButtonTag } from "../../components/ButtonTag";

export function Home() {
    return(
        <Container>

        <Header/>



        <main>
            <Content>
            <header>
                <h1>Meus filmes</h1>
                <NewMovie to="/newmovie"><RxPlus/>Adicionar filme</NewMovie>
            </header>

            <Menu>
            <li><ButtonTag title="Todos" isActive /></li>
            <li><ButtonTag title="Drama" /></li>
            <li><ButtonTag title="Ação"/></li>
            </Menu>

            <Note data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Nodejs' },
                    { id: '2', name: 'React' }
                ]
                }}
            />

            </Content>
        </main>

        </Container>
    )
}