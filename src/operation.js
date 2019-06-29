import {
  authorization, authorizationFailed, fetchFavoriteFailed, fetchFavoriteReceived,
  fetchOffersFailed,
  fetchOffersReceived, fetchReviewsFailed,
  fetchReviewsSuccess, loadingFavorite,
  loadingOffers, sendingReviews, sendingReviewsError
} from "./action-creator";
import {parseServerResponseOffers} from "./parse-server-response/parse-server-response-offers";
import {ServerPath} from "./constants/server-path";
import {parseAuthorizationResponse} from "./parse-server-response/parse-server-response-authorization";
import {parseServerResponseReviews} from "./parse-server-response/parse-server-response-reviews";

export const loadOffers = () => (dispatch, getState, api) => {
  dispatch(loadingOffers());
  return api.get(ServerPath.HOTELS)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(fetchOffersReceived(offers));
      }).catch((e) => {
        dispatch(fetchOffersFailed(e));
      });
};
export const authorize = (authorizationData) => (dispatch, getState, api) => {
  return api.post(ServerPath.AUTHORIZATION, {
    email: authorizationData.email,
    password: authorizationData.password
  })
      .then((response) =>{
        return parseAuthorizationResponse(response);
      })
      .then((user) => {
        dispatch(authorization(user));
      })
      .catch(() =>{
        dispatch(authorization(null));
      });
};
export const isAuthorized = () => (dispatch, getState, api) => {
  return api.get(ServerPath.AUTHORIZATION)
      .then((response) => {
        return parseAuthorizationResponse(response);
      })
      .then((user) => {
        dispatch(authorization(user));
      })
      .catch(() => {
        dispatch(authorization(null));
      });
};
export const fetchReviews = (id) => (dispatch, getState, api) => {
  return api.get(ServerPath.COMMENTS + id)
      .then((response) => {
        return parseServerResponseReviews(response);
      })
      .then((reviews) => {
        dispatch(fetchReviewsSuccess(reviews));
      })
      .catch((e) => {
        dispatch(fetchReviewsFailed(e));
      });
};
export const sendReviews = (review) => (dispatch, getState, api) => {
  dispatch(sendingReviews());
  return api.post(ServerPath.COMMENTS + review.id, {
    rating: review.rating,
    comment: review.comment
  }).then((response) => {
    return parseServerResponseReviews(response);
  })
      .then((reviews) => {
        dispatch(fetchReviewsSuccess(reviews));
      }).catch((e) => {
        dispatch(sendingReviewsError(e));
      });
};
export const changeFavorite = (favoriteItem) => (dispatch, getState, api) => {
  return api.post(`${ServerPath.FAVORITE}${favoriteItem.id}/${favoriteItem.status}`)
      .catch((e) => {
        dispatch(authorizationFailed(e));
      });
};
export const updateOffers = () => (dispatch, getState, api) => {
  return api.get(ServerPath.HOTELS)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(fetchOffersReceived(offers));
      });
};
export const getFavorite = () => (dispatch, getState, api) => {
  dispatch(loadingFavorite());
  return api.get(ServerPath.FAVORITE)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(fetchFavoriteReceived(offers));
      }).catch((e) => {
        dispatch(fetchFavoriteFailed(e));
      });
};


