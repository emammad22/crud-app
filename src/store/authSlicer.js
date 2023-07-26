import { createSlice } from "@reduxjs/toolkit";

export const authInitialState = {
    email: '',
    password: '',
    user: JSON.stringify(localStorage.getItem('user')) ?? false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) => {
            localStorage.removeItem('user');
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