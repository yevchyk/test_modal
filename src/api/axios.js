import axios from 'axios';
import { API_PATH } from '../constants/config'
import Cookies from 'js-cookie'

// configure base url
const instance = axios.create({
  baseURL: `${API_PATH}/` ,
  headers: {
    'Authorization': 'Basic ',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
});

// intercept requests and add authorization token
instance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  config.headers.authorization = `Bearer =${token}`;
  return config;
});


// intercept response and reload page if request error
// is caused by an expired token
instance.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);



export default instance;
