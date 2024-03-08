import './Chat.scss';
import ChatAreaSection from './components/ChatAreaSection/ChatAreaSection';

import ChatInputSection from './components/ChatInputSection/ChatInputSection';
import ChatLogSection from './components/ChatLogSection/ChatLogSection';

const Chat = () => {
  return (
    <main className="main">
      <ChatAreaSection></ChatAreaSection>
      <ChatLogSection></ChatLogSection>
      <ChatInputSection></ChatInputSection>
    </main>
  );
};

export default Chat;