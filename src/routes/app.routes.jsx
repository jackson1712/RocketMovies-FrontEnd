import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/newmovie" element={<NewMovie/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}