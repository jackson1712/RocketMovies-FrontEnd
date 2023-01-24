import { FiArrowLeft, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

export function Profile() {
    return(
        <Container>
            <header>
                <FiArrowLeft/>
                <ButtonText title="Voltar" />
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


            <Input type="text" placeholder="Usuário"/>
            <Input className="user-space" type="text" placeholder="E-mail"/>
            <Input type="password" placeholder="Senha atual"/>
            <Input type="password" placeholder="Nova senha"/>

            <ButtonText className="btn-save" title="Salvar"/>

            </Form>
        </Container>
    )
}