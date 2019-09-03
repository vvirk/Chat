import * as type from '../actions/actionTypes';

export const addMessages = messages => ({
  type: type.ADD_MESSAGES,
  messages,
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

export const addNewMessage = message => ({
  type: type.ADD_NEW_MESSAGE,
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