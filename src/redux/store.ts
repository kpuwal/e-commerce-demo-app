import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currency-slice';
import cartReducer from './slices/cart-slice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
