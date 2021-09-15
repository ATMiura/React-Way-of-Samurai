import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: '1 Hi, how are you?', likesCount: 11},
        {id: 2, message: '2 It\'s my first post', likesCount: 12},
        {id: 3, message: '3 Hi, how are you?', likesCount: 13},
        {id: 4, message: '4 It\'s my first post', likesCount: 14}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCount: 0}],
                newPostText: '',
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p=> p.id!=action.postsId),
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postsId) => ({ type: DELETE_POST, postsId });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default  profileReducer;