import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './tic-tac-toe/game-component.js';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';



ReactDOM.render(
      <HashRouter>
    <Route path="/" component={Game}/>
  </HashRouter>,
    document.getElementById('root')
);
