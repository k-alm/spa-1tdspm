import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";

export default function Header(){
    return(
        <>
            <header>
            <h1>React + Vite</h1>
            <ul>
                <li><Link to={"/"}><H></H></Link></li>
                <li><Link to={"/produtos"}>Produtos</Link></li>
                <li><Link to={"/editar/produtos/1"}>Editar produtos</Link></li>
                <li><Link to={"/cadastrar/produto"}>CADASTRAR PRODUTO</Link></li>
            </ul>
            </header>
        </>
    );
}