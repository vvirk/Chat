import * as type from '../actions/actionTypes';
import * as moment from 'moment';

export const initialState = {
  messages: false,
  isFetching: false,
  newMessage: "",
  userName: false,
  likeMessages: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_USER_NAME:
      return { ...state, userName: action.userName };
    case type.ADD_MESSAGES:
      return { ...state, messages: action.messages };
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    case type.ADD_NEW_MESSAGE:
      const lastMesage = state.messages.length - 1;
      return { ...state, messages: [ ...state.messages,  {
        message: action.message,
        user: state.userName,
        id: +[state.messages[lastMesage].id] + 1,
        created_at: moment().format("YYYY-MM-D HH:mm:ss"),
      }]};
    case type.TOGGLE_LIKE:
      if(state.likeMessages.includes(action.id)) {
        const index = state.likeMessages.indexOf(action.id);
        return { ...state, likeMessages: 
          [ ...state.likeMessages.slice(0, index), 
            ...state.likeMessages.slice(index + 1)]}
      } 
      return { ...state, likeMessages: [...state.likeMessages, action.id] };
      default:
      return state;
  }
};