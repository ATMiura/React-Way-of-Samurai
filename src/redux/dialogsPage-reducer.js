const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, avatar: 'https://i.pravatar.cc/300', name: 'Dimych'},
        {id: 2, avatar: 'https://i.pravatar.cc/300', name: 'Andrew'},
        {id: 3, avatar: 'https://i.pravatar.cc/300', name: 'Sveta'},
        {id: 4, avatar: 'https://i.pravatar.cc/300', name: 'Sasha'},
        {id: 5, avatar: 'https://i.pravatar.cc/300', name: 'Viktor'}
    ],
    messages: [
        {id: 1, message: 'Hi', },
        {id: 2, message: 'How is your it-kamasutra?', },
        {id: 3, message: 'Yo', },
        {id: 4, message: 'Yo', },
        {id: 5, message: 'Yo', }
    ],
    newMessageBody: 'it-kamasutra.com dialogs message',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.body,
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body });

export default dialogsReducer;