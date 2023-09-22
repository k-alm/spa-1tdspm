import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// Importando as páginas
import Home from './routes/Home.jsx'
import Produtos from './routes/Produto.jsx'
import Erro404 from './routes/Erro404.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import ExcluirProduto from './routes/ExcluirProduto.jsx'
import InserirProduto from './routes/InserirProduto.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>, errorElement: <Erro404/>, children:[
    {path: '/', element: <Home/>},
    {path: '/produtos', element: <Produtos/>},
    {path: '/editar/produtos/:id', element: <EditarProdutos/>},
    {path: '/excluir/produtos/:id', element: <ExcluirProduto/>},
    {path: '/cadastrar/produto', element: <InserirProduto/>},
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
