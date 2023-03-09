import axios from 'axios';
const BASE_URL = 'https://panorbit.in/api/users.json';

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};
