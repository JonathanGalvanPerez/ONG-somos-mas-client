import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
import activityReducer from '../features/activities/activitySlice'
import newsDeleteReducer from '../features/news/newsDeleteSlice';
import newsPutReducer from '../features/news/newsPutSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
    activity:activityReducer,
    newsDelete: newsDeleteReducer,
    newsPut:newsPutReducer

  },
});
