import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*<If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{ props.usuario.nome }</strong>
            </If>

            <If test={!usuario || !usuario.nome}>
            Seja bem vindo <strong>Usuario Anonimo</strong>
    </If> */}

            <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{ props.usuario.nome }</strong>
            <Else>
                Seja Bem vindo <strong> Usuario Anonimo</strong>
            </Else>
            </If>

        </div>
    )
}