import React, { useState, useEffect, useContext } from 'react';
import { UserListContext } from '../App';

import {
  ModeCommentOutlined,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from '@mui/icons-material';

import '../assets/ChatContainer.css';

const ChatContainer = ({ userClickHandler, userId }) => {
  const users = useContext(UserListContext);
  const [expanded, setExpanded] = useState(false);
  const [userList, setUserList] = useState([]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const filterList = users.filter((user) => user.id !== parseInt(userId));
    setUserList(filterList);
  }, [userId, users]);

  useEffect(() => {
    // Select a random user from the list and set them as online or offline
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * userList.length);
      const newUsers = [...userList];
      newUsers[randomIndex].online = !newUsers[randomIndex].online;
      setUserList(newUsers);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [userList]);

  return (
    <div className={`chatContainer ${expanded ? 'expanded' : ''}`}>
      <div className='chatContainer__heading' onClick={toggleExpanded}>
        <div className='chatContainer__heading-name'>
          <ModeCommentOutlined
            style={{ marginRight: '10px', fontSize: '30px' }}
          />
          <span>Chats</span>
        </div>
        <div className='chatContainer__heading-icon'>
          {expanded ? (
            <KeyboardArrowDownOutlined style={{ fontSize: '30px' }} />
          ) : (
            <KeyboardArrowUpOutlined style={{ fontSize: '30px' }} />
          )}
        </div>
      </div>

      <div className={`chatContainer__body ${!expanded && 'hidden'}`}>
        <div className='chatContainer__body-users'>
          {userList?.map(({ id, profilepicture, name, online }) => {
            return (
              <div
                className={`chatContainer__body-users_user ${
                  online ? '' : 'offline'
                }`}
                key={id}
                onClick={() => userClickHandler({ id, profilepicture, name })}
              >
                <img src={profilepicture} alt='' />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
