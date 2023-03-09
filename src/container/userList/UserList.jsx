import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserListContext } from '../../App';

import './UserList.css';

const UserList = () => {
  const userList = useContext(UserListContext);

  return (
    <>
      <div className='userContainer'>
        <h1>Select an account</h1>
        <div className='userContainer__Userlist'>
          {userList?.map(({ id, name, profilepicture }) => {
            return (
              <Link to={`/profile/${id}`} key={id}>
                <div className='userContainer__Userlist--user' key={id}>
                  <img src={profilepicture} alt='profilepicture' />
                  <h2>{name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserList;
