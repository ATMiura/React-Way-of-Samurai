const FRIENDS_LIST = 'FRIENDS';

let initialState = {
    friends: [
        {id: 1, avatar: 'https://i.pravatar.cc/250', name: 'Dimych'},
        {id: 2, avatar: 'https://i.pravatar.cc/250', name: 'Andrew'},
        {id: 3, avatar: 'https://i.pravatar.cc/250', name: 'Sveta'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_LIST:
            return state;
        default:
            return state;
    }
};

export const FriendsListCreator = () => ({ type: FRIENDS_LIST });

export default  sidebarReducer;