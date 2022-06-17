import React, { Component } from 'react';
import Nav from './navbar/nav'

import About from './about/about'
import Works from './works/works'
import Blog from './blog/blog'

import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import { createBrowserHistory } from "history";

class App extends Component {

  history = createBrowserHistory();
  
  render() {
    return (
      <div className="home">
        <div className='bg'>
          <div className='bg-white'></div>
          <div className='bg-yellow'></div>
        </div>
        <Nav></Nav>
        <div style={{height: '30px', width: 'auto', background: 'transparent'}}></div>
        <Routes> 
          <Route path="/" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    );
  }
}

export default App;
