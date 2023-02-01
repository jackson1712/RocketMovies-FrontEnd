import { Container } from "./styles";

export function Stars({ icon:Icon, value, ...rest }){
    return(
        <Container {...rest}>
            {Icon && <Icon size={20} />}
        </Container>
    )
}