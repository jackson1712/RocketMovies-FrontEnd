import { Container, Profile, Span } from "./styles";
import { Input } from "../Input";
import { TitlePage } from "../TitlePage";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({children}) {

    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleLogout() {
    const confirm = window.confirm("Tem certeza que deseja sair ?")
        if(confirm){
            signOut();
        }
    }


    return(
        <Container>
                <TitlePage title="RocketMovies"/>
                {children}
                <main>
                    <Span>
                        <h2>{user.name}</h2>
                        <button type="button" onClick={handleLogout}>Sair</button>
                    </Span>
                <Profile to="/profile">
                    <img 
                    src={avatarUrl}
                    alt="imagem de perfil" 
                    />
                </Profile>
                </main>
        </Container>
    );
}