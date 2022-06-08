import React from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Caio" sobrenome="Mouta"/>
            
            <FamiliaMembro nome="Marlene" sobrenome="Mouta" />
            
            <FamiliaMembro nome="Maya" sobrenome="Mouta" />
        </div>
    )
}