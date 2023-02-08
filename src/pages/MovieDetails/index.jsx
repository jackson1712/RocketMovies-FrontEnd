import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import { Container, Content, Profile} from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from 'react-router-dom';
import { MovieTitle } from "../../components/MovieTitle";
import { Rating } from '../../components/Rating';



export function MovieDetails() {
    const { user } = useAuth();

    const navigate = useNavigate();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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

            <header>
            <MovieTitle title="Interestellar" />
            <Rating grade={user.rating} />
            </header>
            
            <Profile>
                    <img src={avatarUrl} alt="foto do perfil" />
                    <strong>{`By : ${user.name}`}</strong>
                    <span><TfiTime/> {console.log(user.updated_at)} </span>
            </Profile>

            <div>
            <Tag title="Ficção cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Ação"/>
            </div>

            <p>
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
            </p>

            <ButtonText icon={FiTrash2} title="Excluir filme"/>
            </Content>
            </main>
        </Container>
    );
}