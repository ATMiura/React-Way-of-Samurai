import * as serviceWorker from './serviceWorker';
import store from "./redux/state";

import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                addDialogsMessage={store.addDialogsMessage.bind(store)}
                updateNewDialogsMessage={store.updateNewDialogsMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
