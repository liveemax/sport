import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import headerReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./middleWare/sagas";
import paginationReducer from "./reducers/paginationReducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        root: headerReducer,
        pagination:paginationReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;