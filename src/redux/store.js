import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";

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
                {id: 1, message: 'Hi', },
                {id: 2, message: 'How is your it-kamasutra?', },
                {id: 3, message: 'Yo', },
                {id: 4, message: 'Yo', },
                {id: 5, message: 'Yo', }
            ],
            newMessageBody: 'it-kamasutra.com dialogs message',
        },
        usersPage: {

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.usersPage = dialogsReducer(this._state.usersPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
};

export default store;
window.store = store;
