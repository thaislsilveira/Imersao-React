import React from 'react';

import DadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <PageDefault >
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
        />
      </PageDefault >

    </div>
  );
}

export default Home;