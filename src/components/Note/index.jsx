import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({data, ...rest}) {
    return(
            <Container to="/details/:1" {...rest} >
                <h2>{data.title}</h2>
                <Rating grade={5} />

                <p>
                Pragas nas colheitas fizeram a civilização humana regredir
                para uma sociedade agrária em futuro de data desconhecida.
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
                Murphy, a filha de dez anos de Cooper, acredita que seu quarto
                está assombrado por um fantasma que tenta se...
                </p>

                {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
                }

            </Container>
    )
}