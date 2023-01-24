import { Container } from "./styles";

export function Input({icon: Icon, ...rest}) {
    return(
        <Container {...rest}>
            {Icon && <Icon size={20}/>}
        </Container>

    )
}