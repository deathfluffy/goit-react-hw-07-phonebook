import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { contactsReducer } from './Contact/ContactsSlice';
import { contactFilterSlice } from './ContactFilter/ContactFilter'; 

export const store = configureStore({
  reducer: {
    contactsScope: contactsReducer,
    contactFilter: contactFilterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
