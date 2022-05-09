import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currency-slice';
import cartReducer from './slices/cart-slice';
import attributesReducer from './slices/attributes-slice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
    attributes: attributesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
