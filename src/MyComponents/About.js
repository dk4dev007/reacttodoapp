import React from 'react';

export const About = () => {
  let tk = 'Thankyou :)';
  return (
    <div className='container-fluid'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>About This React App</h3>
          <hr />
          <p className='card-text'>
            This is my first react app inorder to learn react. This is made by
            using some basic features of react. I hope you all will like this.
          </p>
          <h4>{tk}</h4>
        </div>
      </div>
    </div>
  );
};
