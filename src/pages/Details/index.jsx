import { FiArrowLeft } from 'react-icons/fi';
import { RxStarFilled, RxStar } from 'react-icons/rx';
import { TfiTime } from 'react-icons/tfi';
import { Container, Content, Profile} from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from 'react-router-dom';
import { MovieTitle } from "../../components/MovieTitle";


export function Details() {
    const navigate = useNavigate();

    function handleBackHome() {
        return navigate(-1)
    }

    return(
        <Container>
            <Header/>
            <main>
            <Content>

            <ButtonText 
            icon={FiArrowLeft} 
            title="Voltar"
            onClick={handleBackHome}
            />

            <MovieTitle title="Interestellar"/>
            
            <Profile>
                    <img src="https://github.com/jackson1712.png" alt="foto do perfil" />
                    <span>Por Jackson Moura</span>
                    <span><TfiTime/>17/01/23 ás 17:00</span>
            </Profile>

            <div>
            <Tag title="Ficção cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Ação"/>
            </div>

            <span>
                Pragas nas colheitas fizeram a civilização humana regredir
                para uma sociedade agrária em futuro de data desconhecida.
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
                Murphy, a filha de dez anos de Cooper, acredita que seu quarto
                está assombrado por um fantasma que tenta se comunicar com ela.
                Pai e filha descobrem que o "fantasma" é uma inteligência
                desconhecida que está enviando mensagens codificadas através
                de radiação gravitacional, deixando coordenadas em binário que
                os levam até uma instalação secreta da NASA liderada pelo professor
                John Brand. O cientista revela que um buraco de minhoca foi aberto
                perto de Saturno e que ele leva a planetas que podem oferecer condições
                de sobrevivência para a espécie humana. As "missões Lázaro" enviadas
                anos antes identificaram três planetas potencialmente habitáveis orbitando
                o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem
                aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a
                nave espacial Endurance e recuperar os dados dos astronautas; se um dos
                planetas se mostrar habitável, a humanidade irá seguir para ele na instalação
                da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper
                devasta Murphy.
            </span>

            </Content>
            </main>
        </Container>
    );
}