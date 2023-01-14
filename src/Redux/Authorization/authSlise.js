import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const handlePending = state => {
  state.isLoading = true;
    state.error = null;
    state.isLoaggedIn = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
    state.error = action.payload;
    state.isLoaggedIn = false;

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
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoaggedIn = true;
                state.isLoading = false;
            }).addCase(register.rejected, handleRejected  )
    }
})

export const authReduser = authSlise.reducer;