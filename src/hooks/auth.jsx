import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  async function signIn ({ email, password }) {
    
    
    try {
      setIsLoading(true)
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;
      setIsLoading(false)
      
      localStorage.setItem("@notesmovies:user", JSON.stringify(user));
      localStorage.setItem("@notesmovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      toast.success(`Bem vindo: ${user.name} 😁`, {
        position: toast.POSITION.TOP_CENTER
      });

    } catch (error) {
      setIsLoading(false)

      if(error.response){
        toast.error(`${error.response.data.message} 😞`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(`Não foi possível entrar. 😞`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
    
  }

  function signOut() {
    localStorage.removeItem("@notesmovies:token");
    localStorage.removeItem("@notesmovies:user");

    setData({});
  }

  async function updatedProfile({ user, avatarFile }) {
    try{
      
      setIsLoading(true)
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
        setIsLoading(false)
      }

      await api.put("/users", user);
      localStorage.setItem("@notesmovies:user", JSON.stringify(user));

      setData({ user, token: data.token});
      setIsLoading(false)
      toast.success(`Perfil atualizado! 👤` , {
        position: toast.POSITION.TOP_CENTER
      });

    } catch(error) {
      if(error.response) {
        setIsLoading(false)
        alert(error.response.data.message)
      } else{
        setIsLoading(false)
        toast.error(`Não foi possível atualizar o perfil. 😞`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  }

    useEffect(() => {
      const token = localStorage.getItem("@notesmovies:token");
      const user = localStorage.getItem("@notesmovies:user");

      if(token && user) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ 
        token,
        user: JSON.parse(user)
      });
      }
    }, [])

    return(
      <AuthContext.Provider 
      value={{ 
        signIn, 
        signOut,
        isLoading,
        updatedProfile,
        user: data.user
        }}
        >
        {children}
      </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };