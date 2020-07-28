import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'


function CadastroVideos(){
    return(
        <div>
            <PageDefault>
                <h1>Cadastro de Vídeo</h1>
                <Link to = '/cadastro/categoria'>
                    Cadastrar de Categorias
                </Link>

            </PageDefault>
        </div>
    )
}

export default CadastroVideos