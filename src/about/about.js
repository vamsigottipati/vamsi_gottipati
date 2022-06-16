import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
          <div className='profile-img'>
            <img src={require('../assets/image.png')} alt="" />
            <div className='profile-img-msg'>
                <div className='shadow-drop-center'>
                    <div className='scroller'>
                        <span>
                            This isn't me (Obviously).
                        </span>
                        <span>
                            I'm not thaaat handsome.
                        </span>
                        <span>
                            A bit too cool though.
                        </span>
                    </div>
                    <span style={{marginLeft: '10px'}}>You can see me </span>
                    <p style={{width: '40px', textAlign: 'center', marginLeft: '5px', cursor: 'pointer'}}>here</p>
                </div>
            </div>
          </div>
          <div className='profile-content'>
            <div style={{marginTop: 'auto', textAlign: 'center'}}>
              <p>Developer</p>
              <p>Designer</p>
              <p>Freelancer</p>
            </div>
            <div className='cta-btns'>
              <button className='btn btn-black btn-flex'>
                <p>Projects</p>
                <img className='btn-img' src={require('../assets/arrow.svg')} alt="" />
              </button>
              <button className='btn btn-gray btn-second-cta'>
                Know More
              </button>
            </div>
          </div>
          <div className='hire-me shadow-drop-center-light'>
              <p>Hire <br /> me</p>
          </div>
      </div>
    );
  }
}

export default About;
