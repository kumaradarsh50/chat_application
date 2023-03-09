import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserListContext } from '../App';

import '../assets/TopNav.css';

const TopNav = ({ user, title }) => {
  const navigate = useNavigate();
  const userList = useContext(UserListContext);
  const [showModal, setShowModal] = useState(false);
  const [navUserList, setNavUserList] = useState(
    JSON.parse(localStorage.getItem('navUser')) || null
  );

  const profileDetailHandler = () => {
    setShowModal(!showModal);
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  const getNavUserList = () => {
    const storedNavUser = JSON.parse(localStorage.getItem('navUser'));
    if (storedNavUser) {
      setNavUserList(storedNavUser);
    } else {
      const otherUsers = userList.filter((u) => u.id !== user.id);
      const randomUsers = [];
      while (randomUsers.length < 2 && otherUsers.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherUsers.length);
        const randomUser = otherUsers.splice(randomIndex, 1)[0];
        randomUsers.push(randomUser);
      }
      setNavUserList([...randomUsers]);
    }
  };

  useEffect(() => {
    getNavUserList();
  }, []);

  useEffect(() => {
    if (navUserList !== null) {
      localStorage.setItem('navUser', JSON.stringify(navUserList));
    }
  }, [navUserList]);

  const removeUserFromNavList = (userId) => {
    setNavUserList((prevNavUserList) => {
      // Remove user with matching id from previous navUserList
      const newNavUserList = prevNavUserList.filter((u) => u.id !== userId);
      // Add current user to navUserList if not already present
      if (!newNavUserList.some((u) => u.id === user.id)) {
        newNavUserList.unshift(user);
      }
      return newNavUserList;
    });
  };

  if (!user) {
    return (
      <div className='profile__body-nav'>
        <div className='profile__body-nav-heading'>{title}</div>
      </div>
    );
  }

  return (
    <div className='profile__body-nav'>
      <div className='profile__body-nav-heading'>{title}</div>
      <div className='profile__body-nav-link' onClick={profileDetailHandler}>
        <img src={user.profilepicture} alt='profilepicture' />
        <div>{user.name}</div>
      </div>
      {showModal && (
        <div className='modal-container'>
          <div className='backdrop' onClick={() => setShowModal(false)}></div>
          <div className='modal-content'>
            <img src={user.profilepicture} alt='profilepicture' />
            <span className='model-content_name'>{user.name}</span>
            <span className='model-content_email'>{user.email}</span>

            <div className='model-content_userWrapper'>
              {navUserList !== null &&
                navUserList.map(({ id, name, profilepicture }) => {
                  return (
                    <Link
                      to={`/profile/${id}`}
                      key={id}
                      onClick={() => removeUserFromNavList(id)}
                    >
                      <div className='modal-content_user'>
                        <img src={profilepicture} alt='profilepicture' />
                        <h2>{name}</h2>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <button onClick={logoutHandler}>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
