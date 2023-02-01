import { Container } from "./styles";

export function MovieTitle({ title, icon:Icon, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{title}</h1>
            <span>{Icon && <Icon size={20}/>}</span>
        </Container>
    );
}