import React, { Component } from 'react';
import './coming-soon.css';

class ComingSoon extends Component {
  render() {
    return (
      <div className="coming-soon">
        <div className='img-carousal'>
        </div>
        <div className='coming-soon-msg'>
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
        <div className='coming-soon-content'></div>
      </div>
    );
  }
}

export default ComingSoon;
