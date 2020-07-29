import React, { useState } from 'react';

import CrossIcon from 'assets/CrossIcon';
import MessageBubbleIcon from 'assets/MessageBubbleIcon';

export default function CustomLauncher(handleToggle) {
  const [isOpen, setIsOpen] = useState(false);

  const saveDate = () => {
    if (localStorage.getItem('date') === null) {
      localStorage.setItem('date', new Date());
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => {
          handleToggle();
          saveDate();
          setIsOpen(prevState => !prevState);
        }}
        className={'launcher__button'}
      >
        {!isOpen && <span className='launcher__tooltip'>{'Подписаться на новости!'}</span>}
        {isOpen
          ? <CrossIcon className={'launcher__icon'} />
          : <MessageBubbleIcon className={'launcher__icon'} />}
      </button>
    </>
  );
}
