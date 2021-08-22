let store = {

    _state: {
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
            ],
            newMessageText: 'it-kamasutra.com dialogs message',
        },
        sidebar: {
            friends: [
                {id: 1, avatar: 'https://i.pravatar.cc/250', name: 'Dimych'},
                {id: 2, avatar: 'https://i.pravatar.cc/250', name: 'Andrew'},
                {id: 3, avatar: 'https://i.pravatar.cc/250', name: 'Sveta'},
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addDialogsMessage() {
        let newBlaBla = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
            messageFriend: 0
        };
        this._state.dialogsPage.messages.push(newBlaBla);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewDialogsMessage(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer - наблюдатель - паттерн
    }
}

export default store;
window.store = store;
