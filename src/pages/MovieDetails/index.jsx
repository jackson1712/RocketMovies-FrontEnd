import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { motion } from 'framer-motion';

import { FiArrowLeft, FiTrash2, FiBookOpen, FiCornerRightDown } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import { Container, Content, Profile} from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from 'react-router-dom';
import { MovieTitle } from "../../components/MovieTitle";
import { Rating } from '../../components/Rating';
import { useState, useEffect } from 'react';



export function MovieDetails() {
    const [data, setData] = useState(null);
    const params = useParams();

    const { user } = useAuth();

    const navigate = useNavigate();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    function handleBackHome() {
        return navigate(-1)
    }

    async function handleDelete() {
        const confirm = window.confirm("Tem certeza que deseja excluir o filme ?")

        if(confirm) {
            await api.delete(`/movie_notes/${params.id}`);
            handleBackHome();
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie_notes/${params.id}`)

            setData(response.data);
        }
        fetchMovie();
    }, [])


    return(
        <Container>
            <Header>
                <input type="text" placeholder='Pesquisar por título' />
            </Header>

            {
                data &&
            <main>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: .4 }}   
            >
            <Content>

            <ButtonText 
            icon={FiArrowLeft} 
            title="Voltar"
            onClick={handleBackHome}
            />

            <header>
            <MovieTitle title={data.title} />
            <Rating grade={data.rating} />
            </header>
            
            <Profile>
                    <img src={avatarUrl} alt="foto do perfil" />
                    <strong>{`By : ${user.name}`}</strong>
                    <span><TfiTime/>{data.created_at}</span>
            </Profile>

                {
                data.movietags &&
                <div>
                    { 
                    data.movietags.map(tag => (
                        <Tag 
                        key={String(tag.id)}
                        title={tag.name}
                        />
                    ))
                    }
                </div>
                }
            <span><FiBookOpen/> Resumo do filme <FiCornerRightDown/></span>
            <p>{data.description}</p>

            <ButtonText 
            icon={FiTrash2} 
            title="Excluir filme"
            onClick={handleDelete}
            />
            </Content>
            </motion.div>
            </main>
            }
        </Container>
    );
}