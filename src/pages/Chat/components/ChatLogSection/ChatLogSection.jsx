import { useState, useEffect } from 'react';

import ChatMessage from './components/ChatMessage/ChatMessage';
import { customAxios } from '../../../../API/API';
import { API } from '../../../../../config';

import './ChatLogSection.scss';

const ChatLogSection = () => {
  const [messages, setMessages] = useState([]);

  // request chat messages
  useEffect(() => {
    const requestFeeds = async () => {
      try {
        const response = await customAxios.get(API.CHAT);
        console.log(response);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    requestFeeds();
  }, []);

  const onSocketEvent = () => {
    // TODO: 새 메시지를 받아서 업데이트
  }

  return (
    <div className="chatLogSection section">
      {messages.map(message => (
        <ChatMessage
          key={message.id}
          id={message.id}
          content={message.content}
          createdAt={message.createdAt}
          writer={message.user}
        ></ChatMessage>
      ))}
    </div>
  );
};

export default ChatLogSection;
