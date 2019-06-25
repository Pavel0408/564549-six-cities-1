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
        dispatch(ActionCreator.authorization(user));
      })
      .catch((e) =>{
        dispatch(ActionCreator.authorization(e));
      });
  },
  isAuthorized: () => (dispatch, getState, api) => {
    return api.get(ServerPath.authorization)
      .then((response) => {
        return parseAuthorizationResponse(response);
      })
      .then((user) => {
        dispatch(ActionCreator.authorization(user));
      })
      .catch(() => {
        dispatch(ActionCreator.authorization(null));
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
  },
  sendReviews: (review) => (dispatch, getState, api) => {
    dispatch(ActionCreator.sendingReviews());
    return api.post(ServerPath.comments + review.id, {
      rating: review.rating,
      comment: review.comment
    }).then((response) => {
      return parseServerResponseReviews(response);
    })
      .then((reviews) => {
        dispatch(ActionCreator.fetchReviewsSuccess(reviews));
      }).catch((e) => {
        dispatch(ActionCreator.sendingReviewsError(e));
      });
  },
  changeFavorite: (favoriteItem) => (dispatch, getState, api) => {
    return api.post(`${ServerPath.favorite}${favoriteItem.id}/${favoriteItem.status}`)
      .catch((e) => {
        dispatch(ActionCreator.authorizationFailed(e));
      });
  },
  updateOffers: () => (dispatch, getState, api) => {
    return api.get(ServerPath.hotels)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(ActionCreator.fetchOffersReceived(offers));
      });
  },
};

