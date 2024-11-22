// store.js
import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from './ShopingCartSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice, 
  }, 
});

export default store;
