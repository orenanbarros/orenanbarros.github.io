import './App.css'

import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
 /*
  Itens portifolio:
  – Informações de contato, incluindo as redes sociais que você mais usa
  – Uma breve biografia e uma foto sua
  – Experiência relevante e habilidades dentro do contexto do portfólio
  – Projetos pessoais
  – Documentação de código fonte
  – Formação acadêmica
  – Prêmios/reconhecimentos
  */
 
  return (
    <div className="">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
