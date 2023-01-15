import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const cleanAuthHeader = () => axios.defaults.headers.common.Authorization = '';

export const register = createAsyncThunk('auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', user);
        setAuthHeader(response.data.token);
      return response.data;
     
    } catch (e) {
      return rejectWithValue(e.message);
    }
  });
export const loginization = createAsyncThunk('auth/loginization',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
      
    } catch (e) {
      return rejectWithValue(e.message)
    }
  });
export const logout = createAsyncThunk('auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user);
      cleanAuthHeader()
    
    } catch (e) {
      return rejectWithValue(e.message)
    }
  });
