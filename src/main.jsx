import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// Importando as páginas
import Home from './routes/Home.jsx'
import Produtos from './routes/Produto.jsx'
import Erro404 from './routes/Erro404.jsx'
import EditarProdutos from './routes/Produto.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
