import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './form/formSlice';
//import { createSlice /* createAction, createReducer  */ } from '@reduxjs/toolkit';

/* const addItems = createAction('items/addItems'); */

/* const counterReducer = createReducer(150, {
  [addItems]: (state, actions) => state + actions.payload,
});

console.log(counterReducer);

export const store = configureStore({
  reducer: {
    retet: counterReducer,
  },
}); */

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});
console.log(store.getState());
