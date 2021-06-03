import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
import activityReducer from '../features/activities/activitySlice'

const preloadedState = {
  login: {
    token: JSON.parse(localStorage.getItem('token')),
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
    activity:activityReducer
  },
  preloadedState,
});

store.subscribe(()=>{
  localStorage.setItem('token', JSON.stringify(store.getState().login.token));
})

export default store;