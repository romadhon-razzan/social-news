import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000/api/"
const CONTENT_TYPE = "application/json"
export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers:  { 'Content-Type': CONTENT_TYPE }
});
  