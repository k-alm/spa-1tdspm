import { Link, useLocation } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";
import "./Header.scss";

export default function Header(){

    const rotaAtual = useLocation();


    
    return(
        <>
            <header className="cabecalho">
            <ul>
                <li><Link to={"/"} className={rotaAtual.pathname == "/" ? "active" : ""}><H></H></Link></li>
                <li><Link to={"/produtos"} className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link></li>
                <li><Link to={"/cadastrar/produto"} className={rotaAtual.pathname == "/cadastrar/produto" ? "active" : ""}>CADASTRAR PRODUTO</Link></li>
            </ul>
            </header>
        </>
    );
}