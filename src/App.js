import React from 'react';
import Menu from './components/Menu';
import DadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div style = {{background:"#414141"}}>
      <Menu/>
      {/* <BannerMain/> */}
      <Carousel
        ignoreFirstVideo
        category = {DadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category = {DadosIniciais.categorias[1]}
      />
      <Footer/>
    </div>
  );
}

export default App;