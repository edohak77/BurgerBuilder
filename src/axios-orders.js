import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-b9f9a.firebaseio.com/'
});

export default instance;