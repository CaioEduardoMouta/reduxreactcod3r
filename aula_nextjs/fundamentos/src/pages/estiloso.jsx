import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    console.log(props)
    return (
        <Layout>
            <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
        </Layout>
       
    )
}