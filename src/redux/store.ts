import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userReducer } from './userSlice';
import { viewReducer } from './viewSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    view: viewReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispatch>();
