import React, { useState, useEffect } from 'react';

import {
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRight,
  Close,
} from '@mui/icons-material';

import '../assets/ChatWindow.css';

const ChatWindow = ({ activeMesgUsers, closeChatWindow }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeChatWindow, setActiveChatWindow] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleChatWindowClose = () => {
    setActiveChatWindow(null);
    closeChatWindow(activeMesgUsers);
  };

  useEffect(() => {
    if (activeMesgUsers && activeMesgUsers !== activeChatWindow) {
      setActiveChatWindow(activeMesgUsers);
      setExpanded(false);
    }
  }, [activeMesgUsers]);

  return (
    <div className={`chatwindow ${expanded ? 'expanded' : ''}`}>
      <div className='chatContainer__heading' onClick={toggleExpanded}>
        <div className='chatContainer__heading-name'>
          <img src={activeMesgUsers.profilepicture} alt='' />
          <span style={{ fontSize: '18px', wordBreak: 'break-word' }}>
            {activeMesgUsers.name}
          </span>
        </div>
        <div className='chatContainer__heading-icon'>
          {!expanded ? (
            <>
              <KeyboardArrowDownOutlined style={{ fontSize: '30px' }} />
              <Close
                className='chatContainer__heading-icon_btn'
                style={{ fontSize: '30px' }}
                onClick={handleChatWindowClose}
              />
            </>
          ) : (
            <KeyboardArrowUpOutlined style={{ fontSize: '30px' }} />
          )}
        </div>
      </div>

      <div className={`chatContainer__body ${!expanded && 'hidden'}`}>
        <div className='chatContainer__body-users'>
          <div className='chatContainer__body-users__message'>
            <div className='chatContainer__body-users__message-recive'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit error iste
              </p>
            </div>
            <div className='date'>9:16 PM</div>
            <div className='chatContainer__body-users__message-send'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit error iste
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit error iste
              </p>
            </div>
          </div>
          <div className='chatContainer__body-users__message-send-btn'>
            <KeyboardArrowRight style={{ fontSize: '40px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
