import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./state/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Root/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

