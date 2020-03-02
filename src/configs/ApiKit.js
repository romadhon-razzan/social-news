import axios from 'axios';
const BASE_URL = "http://learn.hackatown.online/api/"
const CONTENT_TYPE = "application/json"
export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers:  { 'Access-Control-Allow-Headers': 'origin' }
});
  