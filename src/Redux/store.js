import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './Contacts/contactsSlise';
import { filterReducer } from './Contacts/filterSlice';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
})


export const store = configureStore({
  reducer: rootReduser,
})
