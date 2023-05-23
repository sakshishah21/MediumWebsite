
import React from 'react';
import '../css/List.css';

const List = () => {
  return (
    <div className='post-top'>
      <img
        src='https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png'
        style={{ height: '20px', width: '20px', marginLeft: '1.2rem', marginTop: '-6rem' }}
      />
      <div style={{ marginLeft: '0.5rem' }}>
        <h4 style={{ marginTop: '0.2rem', fontSize: '13px', fontWeight: 500, color: 'rgba(41, 41, 41, 1)' }}>
          Medium Staff in 3 Min Read
        </h4>
        <h2 style={{ marginTop: '0.2rem', fontSize: '16px', fontWeight: 700, color: 'rgba(41, 41, 41, 1)' }}>
          Nuance over monolithic narratives
        </h2>
        <div style={{ display: 'flex' }}>
          <h3 className='date'>
            This month, we’re sharing a collection of personal stories exploring
            <br/>
            the joys, challenges, and complexities of the Asian American and…
          </h3>
        </div>
        <span className='date'>
          May 1 . 3 min read . <span> Asian American </span>
        </span>
      </div>
    </div>
  );
};

const LeftSideContainer = () => {
  return (
    <div className='post'>
      <List />
      <img
        src='https://miro.medium.com/v2/resize:fill:400:268/1*oE8DRlAen_BCsroUtYlV2A.png'
        style={{ height: '130px', width: '200px', marginLeft: '4rem', marginTop: '2rem' }}
      />
    </div>
  );
};

export default LeftSideContainer;






















