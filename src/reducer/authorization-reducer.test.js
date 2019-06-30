import {authorizationReducer} from "./authorization-reducer";
import {ActionType} from "../action-type";

describe(`authorizationReducer is correct`, () => {
  // тест на неподдерживаемый action
  it(`returns correctly state on incorrect action`, () => {
    const successAuthorizationAction = {
      type: ActionType.SENDING_REVIEWS,
      payload: {
        user: `something`
      }
    };
    const state = {
      user: `user`,
      isAuthorizationRequired: false
    };
    expect(authorizationReducer(state, successAuthorizationAction)).toEqual({
      user: `user`,
      isAuthorizationRequired: false
    });
  });
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

