import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userActive: false,
    nombreUsuario:null,
    token: null
  },
  reducers: {
    logIn: (state, action) => {
        state.userActive = true;
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
        }, 
        
    guardarNombre: (state, action) => {
        state.nombreUsuario = action.payload
        },     
    
    logOut: (state) => {
        state.userActive = false;
        state.token = null;
        localStorage.removeItem("token");
    }
    
  },
})


export const { logIn, logOut,guardarNombre} = loginSlice.actions

export default loginSlice.reducer