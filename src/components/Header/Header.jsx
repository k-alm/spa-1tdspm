import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";
import "./Header.scss";

export default function Header(){
    return(
        <>
            <header className="cabecalho">
            <ul>
                <li><Link to={"/"}><H></H></Link></li>
                <li><Link to={"/produtos"}>PRODUTOS</Link></li>
                <li><Link to={"/cadastrar/produto"}>CADASTRAR PRODUTO</Link></li>
            </ul>
            </header>
        </>
    );
}