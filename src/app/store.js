import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
import usersInfoReducer from "./usersInfoSlice"
import activityReducer from '../features/activities/activitySlice'
import newsDeleteReducer from '../features/news/newsDeleteSlice';
import newsPutReducer from '../features/news/newsPutSlice';


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
    activity:activityReducer,
    newsDelete: newsDeleteReducer,
    newsPut:newsPutReducer,
    usersInfo: usersInfoReducer,
    activity:activityReducer
    
  },
  preloadedState,
});

store.subscribe(()=>{
  localStorage.setItem('org_token', JSON.stringify(store.getState().login.token));
})

export default store;