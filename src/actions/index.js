import * as type from '../actions/actionTypes';

export const addMessages = messages => ({
  type: type.ADD_MESSAGES,
  messages,
});

export const addMessage = message => ({
  type: type.ADD_MESSAGE,
  message,
});

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});
  
export const getMessages = () => async dispatch => {
  try {
    dispatch(toggleIsFetching(true));
    const url = 'https://api.dev.buki.com.ua/frontend_test';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addMessages(responseBody));
    dispatch(toggleIsFetching(false));
 } catch(e) {console.log(e)}
};

export const sendMessage = message => ({
  type: type.SEND_MESSAGE,
  message,
});

export const addUserName = userName => ({
  type: type.ADD_USER_NAME,
  userName,
});

export const toggleLike = id => ({
  type: type.TOGGLE_LIKE,
  id,
});

export const deleteMessage = id => ({
  type: type.DELETE_MESSAGE,
  id,
});

export const addEditId = id => ({
  type: type.ADD_EDIT_ID,
  id,
});

export const changeMessage = id => ({
  type: type.CHANGE_MESSAGE,
  id,
});

export const saveEditedMessage = (message, index) => ({
  type: type.SAVE_EDITED_MESSAGE,
  message, 
  index,
});