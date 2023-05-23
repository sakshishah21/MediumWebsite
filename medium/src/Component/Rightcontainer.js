import React from 'react';
import '../css/Rightcontainer.css';

const Rightcontainer = () => {
  return (
    <div className='right-container'>
      <div style={{ borderBottom: 'grey' }}>
        <div style={{}} className='container'>
          <h2 className='dd' style={{ fontWeight: '700', fontSize: '16px', color: 'rgba(41, 41, 41, 1)',width:'max-content'}}>
            Discover more of what matters to you
          </h2>
        </div>
        <div style={{ display: 'flex' }}>
          <button className='sakshi'>Programing</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>DataScience</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>Technology</button>
        </div>
        <div style={{ marginTop: '-1rem', display: "flex" }}>
          <button className='sakshi'>SelfImprovement</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>Writing</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>Relationships</button>
        </div>
        <div style={{ marginTop: '-1rem', display: "flex" }}>
          <button className='sakshi'>Machinelearning</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>Productivity</button>
          <button style={{ marginLeft: '0.8rem' }} className='sakshi'>Politics</button>
        </div>
        <div style={{ display: 'flex', borderBottom: 'ridge' }}>
          <p className='p2'>See more</p>
        </div>
        <div style={{ display: 'flex' }}>
          <p className='bottom'>Help</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>Status</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>Writers</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>Blog</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>Careers</p>
        </div>
        <div style={{ marginTop: "-2rem", display: "flex" }}>
          <p className='bottom'>Terms</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>About</p>
          <p style={{ marginLeft: '0.8rem' }} className='bottom'>Text to speech</p>
        </div>
      </div>
    </div>
  );
};

export default Rightcontainer;
