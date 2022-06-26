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
       
            <Navegador texto="Estiloso" destino="/estiloso" cor="#310871"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#022134"/>
            <Navegador texto="JSX" destino="/jsx" cor="#0051F0"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="#0090F9"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="#003311"/>
            <Navegador texto="Integracao com API #01" destino="/integracao_1" cor="#009911"/>
        
        </div>
    )
}