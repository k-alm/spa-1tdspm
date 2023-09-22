import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
    document.title = "CADASTRAR";

    //Gerando o id
    let novoId = (ListaProdutos[ListaProdutos.length - 1].id + 1)

    const [produto, setProduto] = useState({
        id: novoId,
        nome:"",
        desc:"",
        valor:""
    });

    
  return (
    <div>
        <h1>Cadastro de Produtos</h1>
    </div>
  )
}
