import React, {useState} from 'react';
import Chatbot from '../components/Chatbot'
import '../assets/styles/components/Chat.scss'

function ChatIcon() {
  const [activateChat, setActivateChat] = useState(false);

  function toggleChat() {
    setActivateChat(prev => !prev);
  }
  
  return (
    <>
      <div className="chat-wrapper"></div>
      <button className={`chat-icon ${activateChat && 'showChat'}`} style={{display: 'flex'}} onClick={toggleChat}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 7.925 2 15.2C2 18.35 3.244 21.237 5.3 23.5C5.3 23.5 4.6 27.8 4.6 28.4C4.6 29 5 29.4 5.6 29.4C6.2 29.4 10.5 28.7 10.5 28.7C12.157 29.537 14.028 30 16 30C23.732 30 30 24.075 30 16.8C30 9.525 23.732 2 16 2Z" fill="currentColor"/>
          <circle cx="11" cy="16" r="2" fill="white"/>
          <circle cx="16" cy="16" r="2" fill="white"/>
          <circle cx="21" cy="16" r="2" fill="white"/>
        </svg>
      </button>
      <Chatbot />
    </> 
  )
}

export default ChatIcon;