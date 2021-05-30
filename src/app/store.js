import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import loginReducer from '../features/login/loginSlice'
import newsDeleteReducer from '../features/news/newsDeleteSlice';
import newsPutReducer from '../features/news/newsPutSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
    newsDelete: newsDeleteReducer,
    newsPut:newsPutReducer

  },
});
