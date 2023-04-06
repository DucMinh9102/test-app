import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginReducer from '../Reducer/loginReducer';


const persistConfig = {
    key: 'root',
    storage: storage,
  };
  
const persistedReducer = persistReducer(persistConfig, LoginReducer); 

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };