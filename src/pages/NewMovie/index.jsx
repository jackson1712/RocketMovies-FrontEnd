import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";

export function NewMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag() {
        if(!newTag) {
            return alert("Não é possível adicionar tag vazia!")
        }
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    const navigate = useNavigate();

    function handleBackSignIn() {
        return navigate(-1);
    }

    async function handleNewMovie() {
        if(newTag) {
            return alert("O último campo de tags está incompleto, adicione o campo ou deixo-o vazio para completar.")
        }
        
        if(rating > 5 || rating <= 0) {
            return alert("A nota precisa estar entre 1 e 5")
        }

        if(!title || !description || !rating) {
            return alert("Complete todos os campos para poder salvar as anotações.")
        }

        if(tags.length === 0) {
            return alert("Adicione ao menos uma tag")
        }


        await api.post("/movie_notes", {
            title,
            description,
            rating,
            movie_tags: tags
        });

        alert("Nota criada com sucesso!");
        handleBackSignIn();
    }

    return(
        <Container>
            <Header>
                <input type="text" placeholder="Pesquisar por título" />
            </Header>

            <main>
            <ButtonText 
            onClick={handleBackSignIn} 
            className="return"
            title="Voltar"
            icon={FiArrowLeft}
            />

            <h1>Novo filme</h1>

            <Form>
                <div>
                <Input 
                type="text" 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
                />

                <Input 
                type="number" 
                placeholder="Sua nota (entre 1 e 5)"
                onChange={e => setRating(e.target.value)}
                
                />
                </div>

                <textarea 
                cols="1" 
                rows="10" 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                />

                <Section title="Marcadores">
                    <div>
                        
                        {
                        tags.map((tag, index) => (
                            <NoteItem
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                            />
                            ))
                        }
                        <NoteItem
                        isNew
                        value={newTag}
                        placeholder="Novo Marcador"
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTag}
                        />

                    </div>
                </Section>

            <footer>
                <Button 
                title="Cancelar"
                onClick={handleBackSignIn} 
                />
                
                <Button 
                title="Salvar alterações" 
                onClick={handleNewMovie}
                />

            </footer>
            </Form>
            </main>
        </Container>
    );
}