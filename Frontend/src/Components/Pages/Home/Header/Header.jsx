import { Link  } from "react-router-dom";
import ChildLogo from "../../../../../public/logo/child-logo.png";
import "./header.css";
import navs from "../../../../Routes/Navs";


export default function Header() {   
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
                            <Link to={nav["path"]} key={index} className="linkbtn">{nav["label"]}</Link>
                        ))
                    }
                </navs>
            </div>
        </div>
        </>
    )
}