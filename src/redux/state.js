import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 12},
            {id: 3, message: 'Hi, how are you?', likesCount: 13},
            {id: 4, message: 'It\'s my first post', likesCount: 14}
        ],
        newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, avatar: 'https://i.pravatar.cc/300', name: 'Dimych'},
            {id: 2, avatar: 'https://i.pravatar.cc/300', name: 'Andrew'},
            {id: 3, avatar: 'https://i.pravatar.cc/300', name: 'Sveta'},
            {id: 4, avatar: 'https://i.pravatar.cc/300', name: 'Sasha'},
            {id: 5, avatar: 'https://i.pravatar.cc/300', name: 'Viktor'},
            {id: 6, avatar: 'https://i.pravatar.cc/300', name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi', messageFriend: 'friend'},
            {id: 2, message: 'How is your it-kamasutra?', messageFriend: 'friend'},
            {id: 3, message: 'Yo', messageFriend: 'friend'},
            {id: 4, message: 'Yo', messageFriend: 'friend'},
            {id: 5, message: 'Yo', messageFriend: 'friend'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, avatar: 'https://i.pravatar.cc/250', name: 'Dimych'},
            {id: 2, avatar: 'https://i.pravatar.cc/250', name: 'Andrew'},
            {id: 3, avatar: 'https://i.pravatar.cc/250', name: 'Sveta'},
        ]
    }
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;