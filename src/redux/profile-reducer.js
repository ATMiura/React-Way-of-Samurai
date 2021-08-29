const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'Hi, how are you?', likesCount: 13},
        {id: 4, message: 'It\'s my first post', likesCount: 14}
    ],
    newPostText: 'it-kamasutra.com',
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default  profileReducer;