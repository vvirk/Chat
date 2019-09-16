import * as type from '../actions/actionTypes';
import * as moment from 'moment';

export const initialState = {
  userName: false,
  messages: false,
  message: "",
  isFetching: false,
  newMessage: "",
  likeMessages: [],
  editId: false,
  editIndex: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_USER_NAME:
      return { ...state, userName: action.userName };
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    case type.ADD_MESSAGES:
      return { ...state, messages: action.messages };
    case type.ADD_MESSAGE:
      return { ...state, message: action.message };
    case type.SEND_MESSAGE:
      const lastMesage = state.messages.length - 1;
      return { 
        ...state, 
          messages: [ ...state.messages,  {
            id: +[state.messages[lastMesage].id] + 1,
            user: state.userName,
            created_at: moment().format("YYYY-MM-D HH:mm:ss"),
            message: action.message,
          }], 
          message: ""
        };
    case type.CHANGE_MESSAGE:
        let index;
        for (let i = 0; i < state.messages.length; i++) {
          if (+action.id === +state.messages[i].id) {
            index = i;
          }
        }
        const editValue = (state.messages[index]) 
          ? state.messages[index].message : "";
      return { 
        ...state, 
          editId: action.id, 
          message: editValue, 
          editIndex: index, 
        };
    case type.SAVE_EDITED_MESSAGE:
      const messagesCopy = [...state.messages];
      messagesCopy[action.index].message = action.message;
      return { 
        ...state, 
          messages: messagesCopy, 
          message: "",
          editId: false, 
          editIndex: false,
        };
    case type.DELETE_MESSAGE:  
      return {  ...state, messages: 
        [ ...state.messages.filter(message => +message.id !== +action.id)]
      };
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