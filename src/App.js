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

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className='bg'>
          <div className='bg-white'></div>
          <div className='bg-yellow'></div>
        </div>
        <Nav></Nav>
        <div style={{height: '30px', widht: 'auto', background: 'transparent'}}></div>
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
