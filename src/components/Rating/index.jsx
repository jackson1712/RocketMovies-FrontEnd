import { Container } from "./styles";
import { RxStarFilled, RxStar } from 'react-icons/rx';

export function Rating ({ grade, ...rest }) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if(i <= grade) {
            stars.push(<RxStarFilled key={i}/>);
        } else {
            stars.push(<RxStar key={i}/>)
        }
    }

    return(
        <Container {...rest}>
            {stars}
        </Container>
    );
}