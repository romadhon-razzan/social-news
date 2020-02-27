import axios from 'axios';
const BASE_URL = "https://jsonplaceholder.typicode.com/"
const CONTENT_TYPE = "application/x-www-form-urlencoded"
export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers:  { 'content-type': CONTENT_TYPE }
});
  