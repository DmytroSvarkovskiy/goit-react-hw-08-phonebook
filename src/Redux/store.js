import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { authReduser } from './Authorization/authSlise';
import { contactsReduser } from './Contacts/contactsSlise';
import { filterReducer } from './Contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

  const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
}

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
  auth: authReduser
});

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);