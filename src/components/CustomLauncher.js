import React, { useState } from 'react';

import CrossIcon from 'assets/CrossIcon';
import MessageBubbleIcon from 'assets/MessageBubbleIcon';

export default function CustomLauncher(handleToggle) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        onClick={() => { handleToggle(); setIsOpen(prevState => !prevState); }}
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
