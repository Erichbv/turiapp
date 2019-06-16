import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import './Assets/index.css';
//import App from './Container/App';
import * as serviceWorker from './serviceWorker';

import Home from './Container/home';
import Perfil from './Container/perfil';
import Login from './Container/login';
import Register from './Container/register';
import Home2 from './Container/home2';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/home" component={Home2} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
//ReactDOM.render(<Home />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
