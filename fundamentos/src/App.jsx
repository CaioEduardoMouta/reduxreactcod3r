import './App.css'
import './components/layout/Card.css'
import React from 'react'


import IndiretaPai from './components/comunicao/IndiretaPai'
import DiretaPai from './components/comunicao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'


export default _ =>
    <div className ="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>

                      

        <Card titulo="Comunicação Indireta" color="#8DAD39">
               <IndiretaPai></IndiretaPai>
                
        </Card>   

        <Card titulo="Comunicação Direta" color="#770000">
               <DiretaPai></DiretaPai>
                
        </Card>     

        <Card titulo="Renderização" color="#00ff9F">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando '}} />
                
        </Card>

        <Card titulo="Desafio Repetição" color="#004F2F">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="Lista" color="#004F2F">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Filhos" color="#00FF00">
            <Familia sobrenome="Mouta">
                <FamiliaMembro nome="Caio" />
                <FamiliaMembro nome="Marlene" />
                <FamiliaMembro nome="Maya" /> 
                
            </Familia>
            </Card>

            <Card titulo="Exemplo de Card" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>

            
            <Card titulo="Fragmento" color="#21FF6F">
            <Fragmento />
            </Card>
    
            
            <Card titulo="Com Parametro" color="#E1B71A">
            <ComParametro
                titulo="Banco de dados"
                aluno=" Mouta "
                nota={9.3} />
            <ComParametro
                titulo="Teoria de Grafos"
                aluno=" Mouta "
                nota={5.9} />
            </Card>

            <Card titulo="Primeiro" color="#588C73">
            <Primeiro></Primeiro>
            </Card>
        </div>

       
    </div>

