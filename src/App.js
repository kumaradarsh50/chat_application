import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchFromAPI } from './utils/fetchUserList';
import UserList from './container/userList/UserList';
import Profile from './container/profile/Profile';

export const UserListContext = React.createContext([]);

const App = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetchFromAPI();
      setUserList(response.users);
    } catch (error) {
      console.log('error', error.message);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <UserListContext.Provider value={userList}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UserList />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserListContext.Provider>
  );
};

export default App;
