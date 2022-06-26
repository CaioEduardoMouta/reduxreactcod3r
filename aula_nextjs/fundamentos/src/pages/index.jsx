import Navegador from "../components/Navegador"


export default function Inicio() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
       
            <Navegador texto="Estiloso" destino="/estiloso" cor="#FFAAFF"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#fafa"/>
            <Navegador texto="JSX" destino="/jsx"/>
        
        </div>
    )
}