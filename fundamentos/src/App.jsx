import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default function App(props) {
    return (
        <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        
        <ComParametro 
        titulo="Banco de dados" 
        aluno =" Mouta "
        nota = " 9.3" />
        <ComParametro 
        titulo="Teoria de Grafos" 
        aluno =" Mouta "
        nota = " 5.9" />
        <Primeiro></Primeiro>
     </div>
    );
}