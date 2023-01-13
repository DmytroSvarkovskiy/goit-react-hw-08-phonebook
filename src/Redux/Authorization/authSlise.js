import { createSlice } from '@reduxjs/toolkit';

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
    // extraReducers: builder => {
    //     builder.addCase(register.panding, (state,action)=> {
    
    //    })
    // }

})
export const authReduser = authSlise.reducer;