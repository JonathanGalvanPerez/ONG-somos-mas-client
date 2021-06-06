import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
import usersInfoReducer from "./usersInfoSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
    usersInfo: usersInfoReducer

  },
});
