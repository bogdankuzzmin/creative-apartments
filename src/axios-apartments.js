import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apartments-7bdc6-default-rtdb.firebaseio.com/'
});

export default instance;
