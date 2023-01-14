import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const cleanAuthHeader = () => axios.defaults.headers.common.Authorization = '';

export const register = createAsyncThunk('auth/register',
  async (user, { rejectWithValue }) => {
    
    try {
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token)
      return response.data;
       
    } catch (e) {
      return rejectWithValue(e.message);
    }
  });
    