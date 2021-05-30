import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';
import newsDeleteReducer from '../features/news/newsDeleteSlice'
import newsPutReducer from '../features/news/newsPutSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    newsDelete: newsDeleteReducer,
    newsPut:newsPutReducer
  },
});
