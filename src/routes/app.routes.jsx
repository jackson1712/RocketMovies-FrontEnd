import { Routes, Route } from "react-router-dom";

import { MovieDetails } from "../pages/MovieDetails";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<MovieDetails/>} />
            <Route path="/newmovie" element={<NewMovie/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}