import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='flex-row'>
        <div className='rectangle' />
        <span className='menu-item'>MenuItem</span>
        <span className='collections'>Collections</span>
        <span className='bestsellers'>Bestsellers</span>
        <span className='dailywear'>Dailywear</span>
      </div>
      <div className='flex-row-dd'>
        <div className='rectangle-1'>
          <span className='some-cool-heading'>Some cool heading</span>
        </div>
        <span className='lorem-ipsum-dolor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </span>
      </div>
      <div className='flex-row-fae'>
        <div className='icons-sedan' />
        <div className='icons-sedan-2' />
        <div className='icons-sedan-3' />
      </div>
      <div className='flex-row-b'>
        <span className='some-text'>Some text </span>
        <span className='some-text-4'>Some text </span>
        <span className='some-text-5'>Some text </span>
      </div>
    </div>
  );
}
