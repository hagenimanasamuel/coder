import {Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Signup from "../Components/Pages/Auth/Signup";
import Login from "../Components/Pages/Auth/Login";
export default function AppRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/login" element={<Login />} />
        </Routes>
        </>
    )
}