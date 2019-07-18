import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Temperatura from './temperatura/Temperatura'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; // importando o BrowserRouter do pacote que acabamos de instalar

//ReactDOM.render(<App />, document.getElementById('_meter'));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/temperatura" exact component={Temperatura} />
      <Route path="/" exact component={Temperatura} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('_meter'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
