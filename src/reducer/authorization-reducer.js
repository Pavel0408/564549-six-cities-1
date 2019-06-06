import {ActionType} from "../action-type";

const initialState = {
  isAuthorizationRequired: true,
  user: null
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZATION_SUCCESS: {
      return Object.assign({}, state, action.payload, {
        isAuthorizationRequired: true
      });
    }
    case ActionType.AUTHORIZATION_FAILED: {
      return Object.assign({}, state, action.payload, {
        isAuthorizationRequired: false
      });
    }
  }

  return state;
};


