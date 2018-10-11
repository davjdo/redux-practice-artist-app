import axios from 'axios';
const URL = 'http://localhost:3004';

export const artistList = keywords => {
  const request = axios
    .get(`${URL}/artists/?q=${keywords}`)
    .then(response => response.data);
  return {
    type: 'GET_ARTISTS',
    payload: request
  };
};

export const artistListAll = () => {
  const request = axios
    .get(`${URL}/artists?_limit=6`)
    .then(response => response.data);
  return {
    type: 'GET_ARTISTS_ALL',
    payload: request
  };
};
