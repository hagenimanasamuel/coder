import Login from "../Components/Pages/Auth/Login";
import Signup from "../Components/Pages/Auth/Signup";
import Home from "../Components/Pages/Home/Home";

const navs = [
    {"label": "Home", "path": "/", "element":<Home />},
    {"label": "Login", "path": "/auth/login", "element":<Login />},
    {"label": "Signup", "path": "/auth/signup", "element":<Signup />}
]; 

export default navs;