import { Container } from "./styles";

export function Button({ loading=false, title, value, ...rest }) {
    return(
        <Container
        disabled={loading}
        type="button"
        {...rest}
        
        >
        {loading ? "Carregando..." : title }
        </Container>
    )
}