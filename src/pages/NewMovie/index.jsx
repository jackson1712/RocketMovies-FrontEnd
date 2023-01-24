import { Container, Content, Form, Footer } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";

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

                <Section title="Marcadores">
                    <div>
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Novo marcador"/>
                    </div>
                </Section>
            </Form>

            <Footer>
                <div>
                    <button>Excluir nota</button>
                    <button className="button-save">Salvar alterações</button>
                </div>
            </Footer>
            </Content>
        </Container>
    );
}