import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div>
            <Link href="/">Voltar</Link>
            {props.children}
        </div>
    )
}