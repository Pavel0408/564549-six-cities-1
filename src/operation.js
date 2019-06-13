import {ActionCreator} from "./action-creator";
import {parseServerResponseOffers} from "./parse-server-response/parse-server-response-offers";
import {ServerPath} from "./constants/server-path";
import {parseAuthorizationResponse} from "./parse-server-response/parse-server-response-authorization";
import {parseServerResponseReviews} from "./parse-server-response/parse-server-response-reviews";

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadingOffers());
    return api.get(ServerPath.hotels)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(ActionCreator.fetchOffersReceived(offers));
      }).catch((e) => {
        dispatch(ActionCreator.fetchOffersFailed(e));
      });
  },
  authorize: (authorizationData) => (dispatch, getState, api) => {
    return api.post(ServerPath.authorization, {
      email: authorizationData.email,
      password: authorizationData.password
    })
      .then((response) =>{
        return parseAuthorizationResponse(response);
      })
      .then((user) => {
        dispatch(ActionCreator.authorizationSuccess(user));
      })
      .catch((e) =>{
        dispatch(ActionCreator.authorizationFailed(e));
      });
  },
  isAuthorized: () => (dispatch, getState, api) => {
    return api.get(ServerPath.authorization)
      .then((response) => {
        return parseAuthorizationResponse(response);
      })
      .then((user) => {
        dispatch(ActionCreator.authorizationSuccess(user));
      })
      .catch((e) => {
        dispatch(ActionCreator.authorizationFailed(e));
      });
  },
  fetchReviews: (id) => (dispatch, getState, api) => {
    return api.get(ServerPath.comments + id)
      .then((response) => {
        return parseServerResponseReviews(response);
      })
      .then((reviews) => {
        dispatch(ActionCreator.fetchReviewsSuccess(reviews));
      })
      .catch((e) => {
        dispatch(ActionCreator.fetchReviewsFailed(e));
      });
  }
};

