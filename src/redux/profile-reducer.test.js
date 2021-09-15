import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: '1 Hi, how are you?', likesCount: 11},
        {id: 2, message: '2 It\'s my first post', likesCount: 12},
        {id: 3, message: '3 Hi, how are you?', likesCount: 13},
        {id: 4, message: '4 It\'s my first post', likesCount: 14}
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message posts should be it-kamasutra', () => {
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('it-kamasutra');
});

it('decrement', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});
