import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Styled from 'styled-components'

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 20px 5% 0px 05%;    
`

function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>

            {/* 
            <BannerMain
                videoTitle={DadosIniciais.categorias[6].videos[0].titulo}
                url={DadosIniciais.categorias[6].videos[0].url}
                videoDescription={'O q  ue é o Front-End? Trabalhando na área'}
            />

            <Carousel
                ignoreFirstVideo
                category={DadosIniciais.categorias[6]}
            />
            <Carousel
                ignoreFirstVideo
                category={DadosIniciais.categorias[7]}
            />
            <Carousel
                ignoreFirstVideo
                category={DadosIniciais.categorias[8]}
            /> */}
            <Footer />
        </>
    )
}

export default PageDefault