import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './items/items-reducer';

////////Store///////////////////
export const store = configureStore({
  reducer: {
    contacts: itemsReducer,
  },
});
//console.log(store.getState());
