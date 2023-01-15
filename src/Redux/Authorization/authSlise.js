import { createSlice } from '@reduxjs/toolkit';
import { register,loginization,logout } from './operations';

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
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoaggedIn = true;
                state.isLoading = false;
            }).addCase(register.rejected, handleRejected)
            .addCase(loginization.pending, handlePending)
            .addCase(loginization.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoaggedIn = true;
                state.isLoading = false;
            })
            .addCase(loginization.rejected, handleRejected)
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state, action) => {
                state.user = { email: null, password: null };
                state.token = null;
                state.isLoaggedIn=false;
                state.isRefreshing=false;
                state.error= null;
                state.isLoading = false;
            })
            .addCase(logout.rejected, handleRejected)
        
    }
})

export const authReduser = authSlise.reducer;