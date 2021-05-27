import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
<<<<<<< HEAD
import loginReducer from '../features/login/loginSlice'
=======
import publicInfoReducer from './publicInfoSlice';
>>>>>>> master

export default configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
    login: loginReducer
=======
    publicInfo: publicInfoReducer
>>>>>>> master
  },
});
