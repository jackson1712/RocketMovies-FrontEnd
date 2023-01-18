import { RxStarFilled, RxStar } from 'react-icons/rx';
import { Container } from "./styles";
import { Tag } from "../../components/Tag"

export function Note() {
    return(
            <Container>
                <h2>Interestellar</h2>

                <span>
                    <RxStarFilled/>
                    <RxStarFilled/>
                    <RxStarFilled/>
                    <RxStarFilled/>
                    <RxStar/>
                </span>

                <p>
                Pragas nas colheitas fizeram a civilização humana regredir
                para uma sociedade agrária em futuro de data desconhecida.
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
                Murphy, a filha de dez anos de Cooper, acredita que seu quarto
                está assombrado por um fantasma que tenta se...
                </p>

                <div>           
                <Tag title="Ficção científica"/>
                <Tag title="Ficção científica"/>
                <Tag title="Ficção científica"/>
                </div>

            </Container>
    )
}