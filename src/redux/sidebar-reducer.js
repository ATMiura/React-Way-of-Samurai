const FRIENDS_LIST = 'FRIENDS_LIST';
const TOGGLE_IS_FETCHING = 'IS_FETCHING';

let initialState = {
    friends: [],
    isFetching: false
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_LIST:
            return {...state, friends: action.friends }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const setFriends = (friends) => ({ type: FRIENDS_LIST, friends });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default  sidebarReducer;