import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {GrFormEdit as Editar} from "react-icons/gr";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import style from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {
  document.title = "Produtos";

  const [counter, setCounter] = useState(0);
  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  useEffect(() =>{
    console.log("Esse effect renderiza sempre.")
  })

  useEffect(() => {
    setListaProdutosLocal(ListaProdutos);
  })

  return ( 
    <div>
      <h1>LISTA DE PRODUTOS</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>COUNTER - {counter}</button>
      </div>
      <table className={style.tblEstilo}>
        <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>DESCRIÇÃO</th>
          <th>PREÇO</th>
          <th>EDITAR / EXCLUIR</th>       
        </tr>
        </thead>
        <tbody>
        {
          listaProdutosLocal.map((item,indice)=>(
            <tr key={indice} className={style.tblLine}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td> <Link to={`/editar/produtos/${item.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${item.id}`}><Excluir/></Link> </td>
                <td>{item.valor}</td>
            </tr>
          ))
        }
</tbody>
<tfoot>
  <tr>
    <td colSpan={4}>PRODUTOS LINDOS</td>
  </tr>
</tfoot>
      </table>
    </div>
  )
}