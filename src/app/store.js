import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
<<<<<<< HEAD
import usersInfoReducer from "./usersInfoSlice"
=======
import activityReducer from '../features/activities/activitySlice'
>>>>>>> master

const preloadedState = {
  login: {
    token: JSON.parse(localStorage.getItem('org_token')),
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
<<<<<<< HEAD
    usersInfo: usersInfoReducer

=======
    activity:activityReducer
>>>>>>> master
  },
  preloadedState,
});

store.subscribe(()=>{
  localStorage.setItem('org_token', JSON.stringify(store.getState().login.token));
})

export default store;