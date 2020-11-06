import React from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import styled from 'styled-components'
import './index.css';

import Main from './components/Main'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>

<div><h1>Fairy Tale Maker</h1></div>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/main">Story Maker</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
