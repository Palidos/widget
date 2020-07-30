import React from 'react';

import 'widget.css';
import WomanEmoji from 'assets/womanEmoji.svg';

export default function HelloPage({ proceedToChat }) {
  const handleClick = () => {
    proceedToChat();
  };

  return (
    <div
      onClick={handleClick}
      className='hello-page__container'
    >
      <div className='hello-page__title'>{'Бот'}</div>
      <div className='hello-page__footer'>
        <img
          className='hello-page__woman'
          src={WomanEmoji}
          alt=''
        />
        <div className='hello-page__primary-text'>{'Привет,'}</div>
        <div className='hello-page__primary-text hello-page__primary-text--last'>{'я онлайн'}</div>
        <div className='hello-page__secondary-text'>{'Есть вопросы? Спрашивай!'}</div>
        <div className='hello-page__secondary-text'>{'Я с ними обязательно справлюсь.'}</div>
      </div>
    </div>
  );
}
