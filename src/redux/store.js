import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsSlice } from './form/formSlice';
import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

////////Actions///////////////////
export const addItems = createAction('items/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteItems = createAction('items/delete');

const changeFilter = createAction('items/changeFilter');

const toggleCompleted = createAction('items/toggleCompleted');

////////Reducer///////////////////
const itemsReducer = createReducer([], {
  [addItems]: (state, { payload }) =>
    state.find(({ name }) => name.toLowerCase() === payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [...state, payload],

  [deleteItems]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [toggleCompleted]: (state, { payload }) =>
    state.map(todo => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo)),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

console.log(addItems);

/* export const store = configureStore({
  reducer: {
    retet: counterReducer,
  },
}); */

////////Store///////////////////
export const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: itemsReducer,
      filter: filterReducer,
    }),
  },
});
console.log(store.getState());
