import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../components/Aside';
import TopNav from '../../components/TopNav';
import { UserListContext } from '../../App';

import User from '../../components/User';
import Post from '../../components/Post';

import './Profile.css';
import ChatContainer from '../../components/ChatContainer';
import ChatWindow from '../../components/ChatWindow';

const Profile = () => {
  const userList = useContext(UserListContext);

  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')) || null
  );
  const [isActive, setIsActive] = useState(0);
  const [navTitle, setNavTitle] = useState('Profile');
  const [activeMesgUsers, setActiveMesgUsers] = useState([]);
  const [userChatWindowCount, setUserChatWindowCount] = useState(0);

  const getUser = () => {
    const user = userList.find((user) => user.id === parseInt(id));
    if (user) {
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    getUser();
  }, [id, currentUser]);

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const asideList = ['Profile', 'Post', 'Gallery', 'ToDo'];

  const asideLinkHandler = (e, idx, li) => {
    setIsActive(idx);
    setNavTitle(li);
  };

  const userClickHandler = (user) => {
    const index = activeMesgUsers.findIndex((u) => u.id === user.id);
    if (index === -1) {
      if (userChatWindowCount >= 3) {
        // Remove the last user from the array if there are already 3 active chat windows
        setActiveMesgUsers((prevUsers) => prevUsers.slice(1));
      } else {
        setUserChatWindowCount(userChatWindowCount + 1);
      }
      setActiveMesgUsers((prevUsers) => [...prevUsers, user]);
    }
  };

  const closeChatWindow = (user) => {
    console.log('user', user);
    setActiveMesgUsers((prevUsers) =>
      prevUsers.filter((u) => u.id !== user.id)
    );
    setUserChatWindowCount(userChatWindowCount - 1);
  };

  return (
    <>
      <div className='profile__container'>
        <Aside
          data={asideList}
          asideLinkHandler={asideLinkHandler}
          isActive={isActive}
        />

        <div className='profile__body'>
          {currentUser === null && (
            <TopNav user={''} title={'User not found !'} />
          )}
          {currentUser !== null && (
            <TopNav user={currentUser} title={navTitle} />
          )}

          {navTitle === 'Profile' && currentUser !== null && (
            <User currentUser={currentUser} />
          )}
          {(navTitle === 'Post' ||
            navTitle === 'Gallery' ||
            navTitle === 'ToDo') &&
            currentUser !== null && <Post />}
          <div className='chatWrapper'>
            <ChatContainer userClickHandler={userClickHandler} userId={id} />

            {activeMesgUsers.map((user, idx) => {
              return (
                <ChatWindow
                  activeMesgUsers={user}
                  closeChatWindow={closeChatWindow}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
