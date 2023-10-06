// Importando dependências e/ou arquivos que vamos utilizar e/ou referenciar
import Conteudo from "./components/Conteudo"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header/Header"

export default function App(){
  return(
      <div className={styles.container}>
        {/*Isso é um comentário*/}
        {/* Vamos criar um cabeçalho com um header, um h1 com um título e uma lista com 3 itens com link */}
        
        <Header/>

        {/* Vamos criar uma seção com uma div com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo dos
        <p></p> uma imagem */}

        <Conteudo/>

        <Outlet/>
        
        {/* Vamos criar um rodapé com uma div, uma lista com 3 itens com links para redes sociais e abaixo 
        um <p></p> com o texto e código do símbolo de direitos reservados */}
        <Footer/>

      </div>
  )
    
  
}