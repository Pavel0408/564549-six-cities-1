import axios from "axios";
import {ActionCreator} from "./action-creator";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreator.authorizationFailed());
    }
    throw new Error(err);
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
