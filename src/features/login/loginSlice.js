import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    nombreUsuario:null,
    token: null,
    roleId: null
  },
  reducers: {
    logIn: (state, action) => {
        state.token = action.payload.token;
        state.roleId = action.payload.roleId;
        }, 
        
    guardarNombre: (state, action) => {
        state.nombreUsuario = action.payload
        },     
    
    logOut: (state) => {
        state.token = null;
        state.roleId = null;
    }
    
  },
})


export const { logIn, logOut,guardarNombre} = loginSlice.actions
export const isLoggedIn = (state) => state.login.token != null;
export const isAdmin = (state) => state.login.roleId === 1;
export const getToken = (state) => state.login.token;

export default loginSlice.reducer