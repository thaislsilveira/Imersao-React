import React from 'react';
import Menu from './components/Menu';
import DadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div style={{ background: "#414141" }}>
      <Menu />
      <BannerMain
        videoTitle={DadosIniciais.categorias[6].videos[0].titulo}
        url = {DadosIniciais.categorias[6].videos[0].url}
        videoDescription = {'O q  ue é o Front-End? Trabalhando na área'}
      />
      <Carousel
        // ignoreFirstVideo
        category = {DadosIniciais.categorias[6]}
      />
      <Carousel
        // ignoreFirstVideo
        category = {DadosIniciais.categorias[7]}
      />
      <Carousel
        // ignoreFirstVideo
        category = {DadosIniciais.categorias[8]}
      />
    
      <Footer/>
    </div>
  );
}

export default App;