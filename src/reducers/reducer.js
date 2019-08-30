import * as type from '../actions/actionTypes';

export const initialState = {
  messages: false,
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_MESSAGES:
      return { ...state, messages: action.messages };
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};