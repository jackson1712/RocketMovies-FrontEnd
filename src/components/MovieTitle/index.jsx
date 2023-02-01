import { Container } from "./styles";

export function MovieTitle({ title, children, value, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{title}</h1>
            {children}
        </Container>
    );
}