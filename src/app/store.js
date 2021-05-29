import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer

  },
});
