import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { FiArrowLeft } from "react-icons/fi";

export function NewMovie() {
    const navigate = useNavigate();

    function handleBackSignIn() {
        return navigate(-1);
    }

    return(
        <Container>
            <Header/>

            <main>
            <ButtonText 
            onClick={handleBackSignIn} 
            className="return"
            title="Voltar"
            icon={FiArrowLeft}
            />

            <h1>Novo filme</h1>

            <Form>
                <div>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <textarea cols="1" rows="10" placeholder="Observações"></textarea>

                <Section title="Marcadores">
                    <div>
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Novo marcador"/>
                        <NoteItem isNew placeholder="Novo marcador"/>
                    </div>
                </Section>

            <footer>
                <Button 
                title="Cancelar"
                onClick={handleBackSignIn} 
                />
                
                <Button title="Salvar alterações" />
            </footer>
            </Form>
            </main>
        </Container>
    );
}