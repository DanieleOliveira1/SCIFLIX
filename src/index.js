import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import cadastroCategoria from './pages/cadastro/Categoria';
import erro from './pages/erro404/erro';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={erro}  />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

