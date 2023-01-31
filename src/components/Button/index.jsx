import { Container } from "./styles";

export function Button({ title, value, ...rest }) {
    return(
        <Container 
        type="button"
        {...rest}
        >
            { title }
        </Container>
    )
}