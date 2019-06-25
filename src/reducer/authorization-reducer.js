import {ActionType} from "../action-type";

const initialState = {
  user: null,
  isAuthorizationRequired: false
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZATION: {
      return Object.assign({}, state, action.payload, {
        isAuthorizationRequired: false
      });
    }
    case ActionType.AUTHORIZATION_FAILED: {
      return Object.assign({}, state, action.payload, {
        isAuthorizationRequired: true
      });
    }
  }

  return state;
};


