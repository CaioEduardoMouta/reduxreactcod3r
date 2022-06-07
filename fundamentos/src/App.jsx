import './App.css'
import './components/layout/Card.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default _ =>
    <div className ="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="Exemplo de Card">
                <Aleatorio min={1} max={60} />
            </Card>

            
            <Card titulo="Fragmento">
            <Fragmento />
            </Card>
    
            
            <Card titulo="Com Parametro">
            <ComParametro
                titulo="Banco de dados"
                aluno=" Mouta "
                nota=" 9.3" />
            <ComParametro
                titulo="Teoria de Grafos"
                aluno=" Mouta "
                nota=" 5.9" />
            </Card>

            <Card titulo="Primeiro">
            <Primeiro></Primeiro>
            </Card>
        </div>

       
    </div>

