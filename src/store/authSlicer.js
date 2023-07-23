import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    email: '',
    password: '',
    user: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = false;
        },
        emailControl: (state, action) => {
            state.email = action.payload;
        },
        passwordControl: (state, action) => {
            state.password = action.payload;
        },
        resetForm: (state) => {
            state.email = '';
            state.password = '';
        }
    }
})

export const { login, logout, emailControl, passwordControl, resetForm } = authSlice.actions;
export default authSlice.reducer;