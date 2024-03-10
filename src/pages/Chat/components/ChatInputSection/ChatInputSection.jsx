import { useState } from 'react';

import Input from '../../../../components/Input/Input';
import IconButton from '../../../../components/IconButton/IconButton';

import './ChatInputSection.scss';

const ChatInputSection = () => {
  const [inputValue, setInputValue] = useState('');

  const onClickChatButton = () => {
    console.log('send message', inputValue);
    setInputValue('');
  };

  return (
    <div className="chatInputSection section">
      <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></Input>
      <div className="chatButtonWrap">
        <IconButton content="ChatRound" size="lg" color="light" onClick={onClickChatButton}></IconButton>
      </div>
    </div>
  );
};

export default ChatInputSection;
