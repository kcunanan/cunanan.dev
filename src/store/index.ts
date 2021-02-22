import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reducers from './reducers';

const persistConfig = {
  key: 'white-elephant',
  storage,
  whitelist: ['site'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
export type AppStoreState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store, null);

export default store;
