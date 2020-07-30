import React from 'react';
import 'widget.css';

export default function Header() {
  return (
    <div className='header__text'>
      <div className='header__bot'>{'Бот'}</div>
      <div className='header__status'>
        <span className='header__circle'></span>
        <span className='header__online'>{'Онлайн'}</span>
      </div>
    </div>
  );
}
