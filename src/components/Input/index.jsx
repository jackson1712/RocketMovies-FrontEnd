import { Container } from "./styles";

export function Input({title}) {
    return(
        <Container placeholder="Pesquisar por título">
            {title}
        </Container>

    )
}