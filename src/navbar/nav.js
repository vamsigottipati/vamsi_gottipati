import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
          <div className='logo'>
              <p>Vamsi</p>
              <p>Gottipati</p>
          </div>
          <div className='nav-items'>
            <div className='nav-item active-nav-item'>
                <p>About</p>
            </div>
            <div className='nav-item'>
                <p>Works</p>
            </div>
            <div className='nav-item'>
                <p>Blog</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Nav;
