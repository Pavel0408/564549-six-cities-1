import {authorizationReducer} from "./authorization-reducer";
import {ActionType} from "../action-type";

describe(`authorizationReducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(authorizationReducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
      user: null
    });
  });
  it(`returns correctly state when authorization success`, () => {
    const successAuthorizationAction = {
      type: ActionType.AUTHORIZATION,
      payload: {
        user: `user`
      }
    };
    expect(authorizationReducer({}, successAuthorizationAction)).toEqual({
      user: `user`,
      isAuthorizationRequired: false
    });
  });
  it(`returns correctly state when authorization failed`, () => {
    const failAuthorizationAction = {
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: `error`
      }
    };
    expect(authorizationReducer({}, failAuthorizationAction)).toEqual({
      isAuthorizationRequired: true,
      user: `error`
    });
  });
});

