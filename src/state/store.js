import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import headerReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./middleWare/sagas";
import jogsReducer from "./reducers/jogsReducer";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        root: headerReducer,
        jogs:jogsReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;
