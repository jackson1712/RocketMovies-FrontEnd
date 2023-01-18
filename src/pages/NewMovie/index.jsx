import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi"

export function NewMovie() {
    return(
        <Container>
            <Header/>
            <header>
            <FiArrowLeft/>
            <ButtonText title="Voltar" />
            </header>

            <h1>Novo filme</h1>

        </Container>
    );
}