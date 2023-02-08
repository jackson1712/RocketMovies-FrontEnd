import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { Container, NewMovie, Content, Menu } from "./styles";
import { RxPlus } from "react-icons/rx";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { ButtonTag } from "../../components/ButtonTag";

export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);

        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }


    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/movie_tags");
            setTags(response.data);
        }

        fetchTags();
    }, []);

    return(
        <Container>

        <Header/>



        <main>
            <Content>
            <header>
                <h1>Meus filmes</h1>
                <NewMovie to="/newmovie"><RxPlus/>Adicionar filme</NewMovie>
            </header>

            <Menu>
            <li>
                <ButtonTag 
                title="Todos" 
                isActive={tagsSelected.length === 0}
                onClick={() => handleTagSelected("todos")}
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

            <Note data={{
                title: 'Interestellar',
                tags: [
                    { id: '1', name: 'Nodejs' },
                    { id: '2', name: 'React' }
                ]
                }}
            />

            </Content>
        </main>

        </Container>
    )
}