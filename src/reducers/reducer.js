import * as type from '../actions/actionTypes';
import * as moment from 'moment';

export const initialState = {
  messages: false,
  isFetching: false,
  newMessage: "",
  userName: false,
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
    default:
      return state;
  }
};