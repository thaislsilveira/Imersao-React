import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'


function CadastroCategorias(){
    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categorias</h1>
                <Link to = '/'>
                    Home
                </Link>

            </PageDefault>
        </>
    )
}

export default CadastroCategorias
