import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { authReduser } from './Authorization/authSlise';
import { contactsReduser } from './Contacts/contactsSlise';
import { filterReducer } from './Contacts/filterSlice';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
  auth:authReduser
})


export const store = configureStore({
  reducer: rootReduser,
})
