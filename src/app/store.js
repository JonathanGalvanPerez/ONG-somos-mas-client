import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import publicInfoReducer from './publicInfoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer
  },
});
