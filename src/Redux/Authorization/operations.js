import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const cleanAuthHeader = () => axios.defaults.headers.common.Authorization = '';