import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { RotatingLines } from "react-loader-spinner";

export function NewMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [loading, setLoading] = useState(false);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag() {
        if(!newTag) {
            return toast("Não é possível adicionar tag vazia!", {
                position: toast.POSITION.TOP_CENTER
            });
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
            return  toast.error(`O último campo de tags está incompleto, adicione o campo ou deixo-o vazio para completar.` , {
                position: toast.POSITION.TOP_CENTER
          });
        }    
        
        if(!title || !description || !rating) {
            return  toast.error(`Complete todos os campos para poder salvar as anotações.` , {
                position: toast.POSITION.TOP_CENTER
          });
        }
        
        if(tags.length === 0) {
            return  toast.error(`Adicione ao menos uma tag.` , {
                position: toast.POSITION.TOP_CENTER
          });
        }
        
        if(rating > 5 || rating <= 0) {
            return  toast.error(`A nota precisa estar entre 1 e 5.` , {
                    position: toast.POSITION.TOP_CENTER
              });
        }

        setLoading(true);
        await api.post("/movie_notes", {
            title,
            description,
            rating,
            movie_tags: tags
        });
        setLoading(false);

        toast.success(`Filme Adicionado! 🎥` , {
            position: toast.POSITION.TOP_CENTER
          });
            handleBackSignIn();
    }

    return(
        <Container>
            <Header>
                <input type="text" placeholder="Pesquisar por título" />
            </Header>

            <main>
            <motion.div
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.4 }}
            >
            {loading ? (
            <div className="hide"/>) 
            :
            (
                <ButtonText 
                onClick={handleBackSignIn} 
                title="Voltar"
                icon={FiArrowLeft}
                />
            )
            }


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

            {
                loading ? 

                (
                    <div className="loading">
                        <RotatingLines
                        strokeColor="#FF859B"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                        />
                    </div>
                )
            
                : (
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
                )
            }

            </Form>
            </motion.div>
            </main>
            
        </Container>
    );
}