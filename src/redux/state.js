const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_DIALOGS_MESSAGE = 'ADD_DIALOGS_MESSAGE',
    UPDATE_NEW_DIALOGS_MESSAGE = 'UPDATE_NEW_DIALOGS_MESSAGE'

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

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer - наблюдатель - паттерн
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if(action.type === ADD_DIALOGS_MESSAGE) {
            let newBlaBla = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                messageFriend: 0
            };
            this._state.dialogsPage.messages.push(newBlaBla);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_DIALOGS_MESSAGE) {

            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreatore = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addDialogsMessageActionCreator = () => ({ type: ADD_DIALOGS_MESSAGE })

export const updateNewDialogsMessageActionCreator = (text) => ({ type: UPDATE_NEW_DIALOGS_MESSAGE, newText: text })

export default store;
window.store = store;
