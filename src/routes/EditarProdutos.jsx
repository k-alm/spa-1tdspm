import { useParams } from "react-router-dom";

export default function EditarProdutos(){

    const {id} = useParams();

    return(
        <div>
            <h1>Editar - Produtos</h1>
            <p>Produto selecionado - {id}</p>
        </div>
    )
}