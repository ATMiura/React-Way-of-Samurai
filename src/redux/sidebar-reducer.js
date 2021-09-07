const FRIENDS_LIST = 'FRIENDS_LIST';
const TOGGLE_IS_FETCHING = 'IS_FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    friends: [],
    isFetching: false,
    totalUsersCount: 0,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_LIST:
            return {...state, friends: action.friends }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
};

export const setFriends = (friends) => ({ type: FRIENDS_LIST, friends });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default  sidebarReducer;