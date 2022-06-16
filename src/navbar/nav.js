import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './nav.css';

class Nav extends Component {
  
  constructor(props) {
    super(props);
    this.aboutLink = React.createRef();  
    this.worksLink = React.createRef();  
    this.blogLink = React.createRef();  
    this.activeNavLink = React.createRef();
  }

  state = {
    currentLocation: '/',
    activeLinkPositionX: 0,
    activeNavDisplay: 'none'
  }

  componentDidMount = () => {
    this.activeNavLink.current.style.opacity = 0
  }

  render() {

    setTimeout(() => {
      this.setState({currentLocation: window.location.pathname})
      let activeLinkPositionX = this.state.currentLocation === '/' ? (this.aboutLink.current.getBoundingClientRect().left + this.aboutLink.current.getBoundingClientRect().right)/2:
      this.state.currentLocation === '/works' ? (this.worksLink.current.getBoundingClientRect().left + this.worksLink.current.getBoundingClientRect().right)/2 :
      (this.blogLink.current.getBoundingClientRect().left + this.blogLink.current.getBoundingClientRect().right)/2
      this.setState({activeLinkPositionX: activeLinkPositionX})
      setTimeout(() => {
        this.activeNavLink.current.style.opacity = 1
      }, 350);
    }, 5);

    const setCurrentLocation = () => {
      this.setState({currentLocation: window.location.pathname})
      let activeLinkPositionX = this.state.currentLocation === '/' ? this.aboutLink.current.getBoundingClientRect().left :
      this.state.currentLocation === '/works' ? this.worksLink.current.getBoundingClientRect().left :
      this.blogLink.current.getBoundingClientRect().left
      this.setState({activeLinkPositionX: activeLinkPositionX})
      this.activeNavLink.current.style.opacity = 1
    }

    return (
        <div className="navbar">
            <div className='logo'>
                <p>Vamsi</p>
                <p>Gottipati</p>
            </div>
            <div className='nav-items'>
              <div ref={this.activeNavLink} className='active-link' style={{left: this.state.activeLinkPositionX - 30}}></div>
              <div onClick={() => setCurrentLocation()} ref={this.aboutLink} className='nav-item'>
                  <Link className='link' to="/">About</Link>
              </div>
              <div onClick={() => setCurrentLocation()} ref={this.worksLink} className='nav-item'>
                  <Link className='link' to="/works">Works</Link>
              </div>
              <div onClick={() => setCurrentLocation()} ref={this.blogLink} className='nav-item'>
                  <Link className='link' to="/blog">Blog</Link>
              </div>
            </div>
        </div>
    );
  }
}

export default Nav;
