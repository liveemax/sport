import {configureStore} from "@reduxjs/toolkit";
import headerReducer from "./reducers/rootReducer";


const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        root: headerReducer
    }
});

export default store;