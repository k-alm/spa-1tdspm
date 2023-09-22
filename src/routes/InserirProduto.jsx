import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";

export default function InserirProduto() {
    document.title = "CADASTRAR";

    const navigate = useNavigate();

    //Gerando um novo ID
    let novoId = (ListaProdutos[ListaProdutos.length - 1].id + 1);

    const [produto, setProduto] = useState({
        id:novoId,
        nome:"",
        desc:"",
        valor:""
    });

    const handeChange = (e) => {
        e.preventDefault();
        //Destructuring
        const {name, value} = e.target;
        //Através da função set do useState, vamos adicionar o valor(value) na propriedade name que é a mesma que foi declarada no useState produto.
        //Utilize o SPREAD para tornar a função mais simples!!
        setProduto({...produto, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ListaProdutos.push(produto);
        navigate("/produtos");
    }

  return (
    <div>
        <h1>Cadastro de Produtos</h1>
        
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>PRODUTO</legend>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handeChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handeChange}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handeChange}/>
              </div>
              <div>
                <button>CADASTRAR PRODUTO</button>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
  )
}
