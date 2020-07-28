import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo(){
  return(
    <div>
      <h1>
        Cadastro de Vídeo
      </h1>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/cadastros/video" component = {CadastroVideo} />
      <Route path = "/" component = {App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

