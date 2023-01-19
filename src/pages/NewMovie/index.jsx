import { Container, Content, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi"

export function NewMovie() {
    return(
        <Container>
            <Header/>
            <Content>
            <header>
            <FiArrowLeft/>
            <ButtonText title="Voltar" />
            </header>

            <h1>Novo filme</h1>

            <Form>
                <div>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <textarea cols="3" rows="10" placeholder="Observações"></textarea>

                <h2>Marcadores</h2>

                
            </Form>
            </Content>
        </Container>
    );
}