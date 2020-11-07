import React, {useState, useEffect } from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import styled from 'styled-components'
import './index.css';

import Main from './components/Main'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Book from './components/Book'

const blankBook = {
  hero:'',
  profession:'',
  prince:false,
  princess:false,
  pname:'',
  villain:''
}

function App() {
  const [pink, setPink] = useState(false)
  const [story, setStory] = useState(blankBook)

  function makeitpink(e){
    e.preventDefault();
    setPink(!pink) 
  }

  const onSubmit = (event) => {
      event.preventDefault()
  }

  const onChange = (event) => {
    const value = event.target.value
    setStory({...story, [event.target.name]: value})
}


  return (
    <div className={pink ? "App pinkback" : "App blueback"}>
      <header className={pink ? "pink" : "blue"}>
      <div><h1>Fairy Tale Maker</h1></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/main">Story Maker</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
      </header>
 
      <div class="toggle">
      <button className={pink ? "makeitpink pinkback" : "makeitpink blueback"} onClick={makeitpink}>
      <span className={pink ? "display" : "none" }>&#129498;</span>
        {pink ? `Make it Blue` : "Make it Pink"}
        <span className={pink ? "none" : "display"}>&#129498;</span>
        </button>
      </div>

      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/book">
                <Book props={story}  />
            </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/main">
            <Main onSubmit={onSubmit} onChange={onChange} story={story}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer className={pink ? "pink" : "blue"}>

      </footer>
    </div>
  );
}

export default App;
