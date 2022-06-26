import Layout from "../components/Layout"

export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)
    const titulo = <h1>JSX Lorem ipsum</h1>

    function subtitulo() {
        return <h2>{"Lorem".toUpperCase()}</h2>
    }

    
    return (
        <Layout titulo="Lorem Ipsum">
        <div>
            {titulo}
            {subtitulo()}
            <h1>Lorem ipsum, dolor sit </h1>
            <h2>{"Lorem ipsum dolor".toUpperCase()}</h2> 
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
            {a * b}
        </div>
        </Layout>
    )
}