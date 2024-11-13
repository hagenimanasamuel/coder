import {Routes, Route } from "react-router-dom";
import navs from "./Navs";
export default function AppRoutes() {
    return(
        <>
        <Routes>
            {
                navs.map((nav, index) => (
                    <Route path={nav["path"]} element={nav["element"]} key={index} />
                ))
            }
        </Routes>
        </>
    )
}