import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const cleanAuthHeader = () => axios.defaults.headers.common.Authorization = '';

export const register = createAsyncThunk('auth/register',
  async (user, { rejectWithValue }) => {
    
        try {
            const response = await axios.post('/signup',user);
            return response.data;
       
    } catch (e) {
      return rejectWithValue(e.message);
    }
    })