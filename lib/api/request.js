import axios from 'axios';
import apiUrl from './apiUrl';

const authAxios = () => axios.create({
  baseURL: apiUrl,
  data: {},
  mode: 'no-cors',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Headers': 'X-CSRF-Token, Content-Type',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': '*',
  },
});

export default authAxios;