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
    
  }

  function clienteExcluido (cliente: Cliente) {
    
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
  />
      <Formulario cliente={Cliente[2]}></Formulario>
      </Layout>
    </div>
      
  )
}
