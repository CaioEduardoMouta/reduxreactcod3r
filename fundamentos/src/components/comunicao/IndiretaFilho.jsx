
import React from 'react'
import DiretaPai from './DiretaPai'


export default props => {
   const cb = props.quandoClicar
  
   const gerarIdade = () => parseInt(Math.random() * (20)) + 50
   const gerarNerd = () => Math.random() > 0.5
   return (
        <div>
            <div> Filho</div>
        <button onClick={_ => cb('Magal ', gerarIdade(), gerarNerd())
            
        }>
            Fornecer Informações</button>
        </div>
    )
}