import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Lorem', 31, '1'),
    new Cliente('Ipsum', 33, '1'),
    new Cliente('Dolor', 22, '1'),
    new Cliente('Sit', 54, '1'),

  ]

  function clienteSelecionado(cliente: Cliente) {
          setCliente(Cliente.vazio)
          setVisivel('form')
  }

  function novoCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  function clienteExcluido (cliente: Cliente) {
    
  }

  
  function salvarCliente(cliente: Cliente) {
      setVisivel('tabela')
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
          <Botao cor="green" className="mb-4" onClick={novoCliente}>
            Novo Cliente
          </Botao>
          </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}       
          />
        </>
      ) : (
        <Formulario 
        cliente={Cliente[2]} 
        clienteMudou={salvarCliente}
        cancelado={() => setVisivel('tabela')}
        />
      )}
      
      </Layout>
    </div>
      
  )
}
