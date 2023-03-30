import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Reducer";

const store = configureStore({
    reducer: loginReducer
});

export default store;