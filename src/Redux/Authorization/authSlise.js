import { createSlice } from '@reduxjs/toolkit';

const authSlise = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, password: null },
        token:null,
        isLoaggedIn: false,
        isRefreshing: false,
        error: null
    },
    // extraReducers: builder => {
    //    builder.addCase 
    // }

})
export const authReduser = authSlise.reducer;