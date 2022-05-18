import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import currencyReducer from './slices/currency-slice';
import cartReducer from './slices/cart-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const reducers = combineReducers({
  currency: currencyReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
