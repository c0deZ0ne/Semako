import axios from 'axios';
import config from './config';
const token = localStorage.getItem('token');
const instance = axios.create({
  baseURL: `${config.API_BASE_URL}`,
  headers:{ Authorization: `Bearer ${token}` }
});
export default instance;
