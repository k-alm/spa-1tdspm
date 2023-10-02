import styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {

    const [produto, setProduto] = useState({
        id:"",
        nome:"",
        desc:"",
        valor:""
    });

    const handleChange = (e) => {
        //Destructuring dos dados que chegam do form
        const {name, value} = e.target;
        setProduto({...produto, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    if (props.open) {
        return (
            <div className={styles.container}>
                <h1>CADASTRO DE PRODUTOS</h1>
                <button onClick={() => props.setOpen(false)}>CLOSE-MODAL</button>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>NOVO PRODUTO</legend>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" value={produto.nome} id="idNome" onChange={handleChange} placeholder="Digite o nome do produto" required/>
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name="desc" value={produto.desc}  id="idDesc" onChange={handleChange} placeholder="Digite a descrição do produto" required/>
                            </div>
                            <div>
                                <label htmlFor="idValor">Valor</label>
                                <input type="number" name="valor" value={produto.valor} id="idValor" onChange={handleChange} placeholder="Digite o valor do produto" required/>
                            </div>
                            <div>
                                <button>CADASTRAR</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}