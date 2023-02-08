import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({data, ...rest}) {
    return(
            <Container {...rest} >
                <h2>{data.title}</h2>
                <Rating grade={data.rating} />

                <p>{data.description}</p>

                {
                data.movie_tags &&
                <footer>
                    {
                        data.movie_tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
                }

            </Container>
    )
}