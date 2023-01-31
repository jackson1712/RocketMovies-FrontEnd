import { FiArrowLeft, FiCamera } from "react-icons/fi";
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/jackson1712.png" 
                    alt="minha imagem de perfil" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                    <input id="avatar" type="file"/>
                    </label>
                </Avatar>

            <div className="inputs">
            <Input icon={FiUser} type="text" placeholder="Usuário"/>
            <Input icon={FiMail} className="user-space" type="text" placeholder="E-mail"/>
            <Input icon={FiLock} type="password" placeholder="Senha atual"/>
            <Input icon={FiLock} type="password" placeholder="Nova senha"/>
            </div>

            <Button title="Salvar"/>

            </Form>
        </Container>
    )
}