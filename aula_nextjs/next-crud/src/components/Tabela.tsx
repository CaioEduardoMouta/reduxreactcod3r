import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho(){
    return (
        <table>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        </table>
    )
}

function renderizarDados() {
   return props.clientes?.map((cliente, i) => {
     return (
        <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.idade}</td>
        </tr>
     )
   }) 
}

    return (
    <table className="w-full rounded-xl overflow-hiden">
        <thead className={`
        text-gray-100
        bg-grandient-to-r from-purple-500 to-purple-800
        `}>

        </thead>
        <thead>
        {renderizarCabecalho()}
        </thead>
        <tbody>
            {renderizarDados()}
        </tbody>
        
    </table>
)
}