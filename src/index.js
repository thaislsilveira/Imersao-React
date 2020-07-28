import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroVideos from './pages/cadastro/videos'

const Pagina404 = () => (<div><h1>Página 404</h1></div>) 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/cadastros/video" component = {CadastroVideos} />
      <Route path = "/" component = {Pagina404}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

