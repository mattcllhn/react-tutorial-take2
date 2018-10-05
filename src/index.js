import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './tic-tac-toe/game-componentcomponent.js';
import HomeComponent from './home.js';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';



ReactDOM.render(
      <HashRouter>
          <div>
    <Route path="/" component={HomeComponent}/>
    <Route path="/game" component={Game}/>
    </div>
  </HashRouter>,
    document.getElementById('root')
);
