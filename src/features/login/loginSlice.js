import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    nombreUsuario:null,
    token: null
  },
  reducers: {
    logIn: (state, action) => {
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
        }, 
        
    guardarNombre: (state, action) => {
        state.nombreUsuario = action.payload
        },     
    
    logOut: (state) => {
        state.token = null;
        localStorage.removeItem("token");
    }
    
  },
})


export const { logIn, logOut,guardarNombre} = loginSlice.actions
export const isLoggedIn = (state) => state.login.token != null;

export default loginSlice.reducer