import React, { useEffect } from 'react';
import medium from '../images/medium.png';
import '../css/Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const button= document.querySelector('button');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
        button.classList.add('button-scrolled')
      } else {
        navbar.classList.remove('navbar-scrolled');
        button.classList.remove('button-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav>
        <img src={medium} alt="medium" />
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Membership</a></li>
          <li><a href="#">Write</a></li>
          <li><a href="#">Sign in</a></li>
          <button className='button'>Get started</button>
        </ul>
      </nav>
      <div className="n p">
        <div className="box">
          <div className="content-container">
            <div className="box1">
              <p className="heading">Stay curious.</p>
              <div>
                <span className="h3">Discover stories, thinking, and expertise </span>
                <span className='span'>from writers on any topic.</span>
              </div>
              <div className="cw">
                <button className="btn2">Start reading</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;