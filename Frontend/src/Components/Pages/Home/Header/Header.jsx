import { Link  } from "react-router-dom";
import ChildLogo from "../../../../../public/logo/child-logo.png";
import "./header.css";


export default function Header() {
    // const navs = {
    //     "label":["Login", "Signup"],
    //     "path":["/login", "/signup"]
    // };
        const navs = ["Login", "Signup"];    
    return(
        <>
        <div className="container">
            <div className="header-logo">
                <img src={ChildLogo} width={50} alt="shuri mind child logo" />
                <h2>ShuriMind</h2>
            </div>
            <div className="header-navs">
                <navs>
                    {
                        navs.map((nav, index) => (
                            <Link to="/" key={index} className="linkbtn">{nav}</Link>
                        ))
                    }
                </navs>
            </div>
        </div>
        </>
    )
}