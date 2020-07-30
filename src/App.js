import React, { useEffect, useState } from 'react';
import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
} from 'react-chat-widget';

import './widgetStylesOverride.css';
import 'react-chat-widget/lib/styles.css';

import WomanEmoji from 'assets/womanEmoji.svg';
import CustomLauncher from 'components/CustomLauncher';
import Header from 'components/Header';
import HelloPage from 'components/HelloPage';
import TodayPanel from 'components/TodayPanel';

function App() {
  const [helloPage, setHelloPage] = useState(true);

  const handleNewUserMessage = newMessage => {
    addResponseMessage(newMessage);
  };

  const proceedToChat = () => {
    document.documentElement.style.setProperty('--header-height', '50px');
    document.documentElement.style.setProperty('--main-body-height', '420px');
    document.documentElement.style.setProperty('--main-body-padding-top', '10px');
    setHelloPage(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      proceedToChat();
    }
  };

  useEffect(() => {
    renderCustomComponent(TodayPanel);
    addResponseMessage('Вы сможете принять наш пробник в понедельник утром?');
  }, []);

  return (
    <div
      className='App'
      onKeyDown={handleKeyDown}
    >
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        launcher={handleToggle => CustomLauncher(handleToggle)}
        titleAvatar={!helloPage && WomanEmoji}
        title={helloPage
          ? <HelloPage proceedToChat={proceedToChat} />
          : <Header />}
        subtitle=''
        senderPlaceHolder='Напишите нам'
      />
    </div>
  );
}

export default App;
