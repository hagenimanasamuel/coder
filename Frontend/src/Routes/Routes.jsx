import {Routes, Route } from "react-router-dom";
import navs from "./Navs";
import Login from "../Components/Pages/Auth/Login";
import AppAuth from "../Components/Pages/Auth/Auth";
import Signup from "../Components/Pages/Auth/Signup";
export default function AppRoutes() {
    return(
        <>
        <Routes>
            {
                navs.map((nav, index) => (
                    <Route path={nav["path"]} element={nav["element"]} key={index} />
                ))
            }
            <Route path="/auth" element={<AppAuth authMethod={<Signup />}/>} />
            {/* <Route path="/dashboard" element={<Login />} /> */}
        </Routes>
        </>
    )
}