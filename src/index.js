import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {addPost, updateNewPostText, addDialogsMessage, updateNewDialogsMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addDialogsMessage={addDialogsMessage}
                updateNewDialogsMessage={updateNewDialogsMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
