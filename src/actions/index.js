import * as type from '../actions/actionTypes';

export const addMessages = messages => ({
  type: type.ADD_MESSAGES,
  messages,
});

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});
  
export const getMessages = () => async (dispatch) => {
  try {
    const url = 'https://api.dev.buki.com.ua/frontend_test';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addMessages(responseBody));
 } catch(e) {console.log(e)}
};

export const addNewMessage = message => ({
  type: type.ADD_NEW_MESSAGE,
  message,
});

export const addUserName = userName => ({
  type: type.ADD_USER_NAME,
  userName,
})