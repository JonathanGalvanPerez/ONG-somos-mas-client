import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userActive: false,
    nombreUsuario:null
  },
  reducers: {
    logIn: (state ) => {
        state.userActive = true
        }, 
        
    guardarNombre: (state, action) => {
        state.nombreUsuario = action.payload
        },     
    
    logOut: (state) => (
        state.userActive = false
    )
    
  },
})


export const { logIn, logOut,guardarNombre} = loginSlice.actions

export default loginSlice.reducer