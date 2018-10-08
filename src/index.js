import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './tic-tac-toe/game-component.js';
import HomeComponent from './home.js';
import {
  HashRouter,
  Route,
  Redirect,
  Link
} from 'react-router-dom';



ReactDOM.render(
      <HashRouter>
          <div>

    <Redirect from="/" to="/home" />

    <Route path="/home" component={HomeComponent}/>
    <Route path="/game" component={Game}/>
    </div>
    </HashRouter>,
    document.getElementById('root')
);
