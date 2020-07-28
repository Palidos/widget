import React, { useEffect } from 'react';
import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
} from 'react-chat-widget';

import './widgetStylesOverride.css';
import './widget.css';
import 'react-chat-widget/lib/styles.css';

import WomanEmoji from 'assets/womanEmoji.svg';
import CustomLauncher from 'components/CustomLauncher';
import TodayPanel from 'components/TodayPanel';

function App() {
  const handleNewUserMessage = newMessage => {
    addResponseMessage(`${newMessage}`);
  };

  useEffect(() => {
    renderCustomComponent(TodayPanel);
    addResponseMessage(`Вы сможете принять наш пробник в понедельник утром?`);
  }, []);

  return (
    <div className='App'>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        launcher={handleToggle => CustomLauncher(handleToggle)}
        titleAvatar={WomanEmoji}
        title={(
          <div className={'header__text'}>
            <div className={'header__bot'}>{'Бот'}</div>
            <div className={'header__status'}>
              <span className={'header__circle'}></span>
              <span className={'header__online'}>{'Онлайн'}</span>
            </div>
          </div>
        )}
        subtitle={''}
        senderPlaceHolder={'Напишите нам'}
      />
    </div>
  );
}

export default App;
