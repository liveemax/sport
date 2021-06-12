import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root";
import {Provider} from "react-redux";
import store from "./state/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

