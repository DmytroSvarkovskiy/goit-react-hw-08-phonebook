import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlise = createSlice({
    name: 'auth',
    initialState: {
        user: { email: null, password: null },
        token:null,
        isLoaggedIn: false,
        isRefreshing: false,
        error: null,
        isLoading:false
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
            console.log(action.payload);
        })
    }
})

export const authReduser = authSlise.reducer;