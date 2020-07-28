import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroVideos from './pages/cadastro/videos'
import CadastroCategoria from './pages/cadastro/categoria'

const Pagina404 = () => (<div><h1>Página 404</h1></div>) 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/cadastro/video" component = {CadastroVideos} />
      <Route path = "/cadastro/categoria" component = {CadastroCategoria} />
      <Route path = "/" component = {Pagina404}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

