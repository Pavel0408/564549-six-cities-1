import {authorizationReducer} from "./authorization-reducer";
import {ActionType} from "../action-type";

describe(`authorizationReducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(authorizationReducer(undefined, {})).toEqual({
      isAuthorized: true,
      user: null
    });
  });
  it(`returns correctly state when authorization success`, () => {
    const successAuthorizationAction = {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: {
        user: `user`
      }
    };
    expect(authorizationReducer({}, successAuthorizationAction)).toEqual({
      isAuthorized: true,
      user: `user`
    });
  });
  it(`returns correctly state when authorization failed`, () => {
    const failAuthorizationActionj = {
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: `error`
      }
    };
    expect(authorizationReducer({}, failAuthorizationActionj)).toEqual({
      isAuthorized: false,
      user: `error`
    });
  });
});

