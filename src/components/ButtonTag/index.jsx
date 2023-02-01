import { Container } from './styles';

export function ButtonTag({ title, isActive = false, ...rest }) {
    return(
        <Container 
        type='button' 
        isActive={isActive}
        {...rest}
        >
            {title}
        </Container>
    );
}