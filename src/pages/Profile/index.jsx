import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiCamera } from "react-icons/fi";
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            old_password: oldPassword,
            password: newPassword
        }

        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    const navigate = useNavigate(-1)
    function handleBackSignIn(){
        return navigate(-1)
    }


    return(
        <Container>
            <header>
                <ButtonText 
                icon={FiArrowLeft} 
                title="Voltar" 
                onClick={handleBackSignIn}
                />
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatarUrl}
                    alt="minha imagem de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                    <input 
                    id="avatar"
                    type="file"
                    onChange={handleChangeAvatar}
                     />
                    </label>
                </Avatar>

            <div className="inputs">
            <Input 
            icon={FiUser} 
            type="text" 
            placeholder="Usuário"
            value={name}
            onChange={e => setName(e.target.value)}
            />

            <Input 
            icon={FiMail} 
            className="user-space" 
            type="text" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <Input 
            icon={FiLock} 
            type="password" 
            placeholder="Senha atual"
            onChange={e => setOldPassword(e.target.value)}
            />

            <Input 
            icon={FiLock} 
            type="password" 
            placeholder="Nova senha"
            onChange={e => setNewPassword(e.target.value)}
            />
            </div>

            <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        </Container>
    )
}