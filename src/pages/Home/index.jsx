import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, NewMovie, Content, Menu } from "./styles";
import { FiAlertTriangle } from "react-icons/fi";
import { RxPlus } from "react-icons/rx";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { ButtonTag } from "../../components/ButtonTag";

export function Home() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);



    function handleTagSelected(tagName) {
        if(tagName === "all") {
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);

        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }

    function handleMovieDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/movie_tags");
            setTags(response.data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchNotes() {
           const response = await api.get(`/movie_notes?title=${search}&movie_tags=${tagsSelected}`);

           setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search]);

    return(
        <Container>

        <Header>
            <input 
            type="text" 
            placeholder="Pesquisar por título"
            onChange={e => setSearch(e.target.value)} 
            />
        </Header>



        <main>
            <Content>
            <header>
                <h1>Meus filmes</h1>
                <NewMovie to="/newmovie" onChange={e => setCarregando(e.target.value)}><RxPlus/>Adicionar filme</NewMovie>
            </header>

            <Menu>
            <li>
                <ButtonTag 
                title="Todos" 
                isActive={tagsSelected.length === 0}
                onClick={() => handleTagSelected("all")}
                />
            </li>

            {
                tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonTag 
                        title={tag.name}
                        onClick={() => handleTagSelected(tag.name)}
                        isActive={tagsSelected.includes(tag.name)}
                        />
                    </li>
                ))
            }
            </Menu>


            {   notes.length ? (
                notes.map(note => (
            <Note 
            key={String(note.id)}
            data={note}
            onClick={() => handleMovieDetails(note.id)}
            />
            ))) : 
            (
            <div>
            <h1>
                VOCÊ AINDA NÃO ADICIONOU NENHUM FILME
            </h1>
            <FiAlertTriangle/>
            </div>)
            }

            </Content>
        </main>

        </Container>
    )
}