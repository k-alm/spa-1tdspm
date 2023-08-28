// Importando dependências e/ou arquivos que vamos utilizar e/ou referenciar
import Header from "./components/header"

export default function App(){
  return(
    <>
      <div className="container">
        {/*Isso é um comentário*/}
        {/* Vamos criar um cabeçalho com um header, um h1 com um título e uma lista com 3 itens com link */}
        
        {/* Vamos criar uma seção com uma div com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo dos
        <p></p> uma imagem */}
        
        <section>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis autem laborum sit voluptatem quia impedit. Voluptatem optio, dicta sint sunt illum suscipit iste vitae perferendis dolores est. Incidunt, deserunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis autem laborum sit voluptatem quia impedit. Voluptatem optio, dicta sint sunt illum suscipit iste vitae perferendis dolores est. Incidunt, deserunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis autem laborum sit voluptatem quia impedit. Voluptatem optio, dicta sint sunt illum suscipit iste vitae perferendis dolores est. Incidunt, deserunt?</p>
          <img src="" alt="" />
        </div>
        </section>
        
        {/* Vamos criar um rodapé com uma div, uma lista com 3 itens com links para redes sociais e abaixo 
        um <p></p> com o texto e código do símbolo de direitos reservados */}
        <footer>
          <div>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Reddit</a></li>
            </ul>
            <p>&copy; Todos os direitos reservados - 2023</p>
          </div>
        </footer>
      </div>
    </>
  )
    
  
}