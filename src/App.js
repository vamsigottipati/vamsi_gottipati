import React, { Component } from 'react';
import Nav from './navbar/nav'
import About from './about/about'
import './App.css';
import {
  BrowserRouter,
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
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
