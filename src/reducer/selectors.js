import {createSelector} from "reselect";

import {NameSpace} from "./name-space";

export const getOffers = (state) => {
  return state[NameSpace.FETCH_OFFERS].offers;
};

export const getCityName = (state) => {
  return state[NameSpace.DATA].cityName;
};

export const getOffersIsLoading = (state) => {
  return state[NameSpace.FETCH_OFFERS].isLoading;
};

export const getOffersLoadError = (state) => {
  return state[NameSpace.FETCH_OFFERS].error;
};

export const getCities = createSelector([getOffers],
    (offers) => {
      return [...new Set(offers.map((offer) => offer.city))];
    });

export const getActiveOffers = createSelector([getOffers, getCityName], (offers, cityName) => {
  return offers.filter((offer) => offer.city === cityName);
});

export const getIsAuthorizationRequired = (state) => {
  return state[NameSpace.AUTHORIZATION].isAuthorizationRequired;
};

export const getUser = (state) => {
  return state[NameSpace.AUTHORIZATION].user;
};

export const getActiveOffer = (state) => {
  return state[NameSpace.DATA].activeOffer;
};

export const getReviews = (state) => {
  return state[NameSpace.REVIEWS].reviews;
};

export const getReviewsError = (state) => {
  return state[NameSpace.REVIEWS].error;
};

export const getSort = (state) => {
  return state[NameSpace.DATA].sort;
};

export const getActivePinOffer = (state) => {
  return state[NameSpace.DATA].activePinOffer;
};
