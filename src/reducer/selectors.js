import {createSelector} from "reselect";

import {NameSpace} from "./name-space";
import {getDistanceFromCoords} from "../utils";

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
export const getFavoriteOffers = (state) => {
  return state[NameSpace.FAVORITE].favoriteOffers;
};

export const getFavoriteCityNames = createSelector([getFavoriteOffers], (offers) => {
  return [...new Set(offers.map((offer) => offer.city))];
});

export const getActiveOffers = createSelector([getOffers, getCityName], (offers, cityName) => {
  return offers.filter((offer) => offer.city === cityName);
});

export const getActiveOffer = (state) => {
  return state[NameSpace.DATA].activeOffer;
};

export const getNearestOffers = createSelector([getOffers, getActiveOffer],
    (offers, activeOffer) => {
      if (!activeOffer) {
        return [];
      }
      return offers.filter((offersItem) => offersItem !== activeOffer)
    .sort((a, b) => {
      return getDistanceFromCoords({
        coordinateFirst: a.coordinates,
        coordinateSecond: activeOffer.coordinates})
        - getDistanceFromCoords({
          coordinateFirst: b.coordinates,
          coordinateSecond: activeOffer.coordinates});
    }).slice(0, 3);
    });

export const getOffersOnMap = createSelector([getNearestOffers, getActiveOffer], (offers, activeOffer) => {
  const offersOnMap = offers.slice();
  offersOnMap.push(activeOffer);
  return offersOnMap;
});

export const getIsAuthorizationRequired = (state) => {
  return state[NameSpace.AUTHORIZATION].isAuthorizationRequired;
};

export const getUser = (state) => {
  return state[NameSpace.AUTHORIZATION].user;
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

export const getSendingError = (state) => {
  return state[NameSpace.REVIEWS].sendingError;
};

export const getIsSending = (state) => {
  return state[NameSpace.REVIEWS].isSending;
};

export const getFavoriteIsLoading = (state) => {
  return state[NameSpace.FAVORITE].isLoading;
};

export const getFavoriteLoadingError = (state) => {
  return state[NameSpace.FAVORITE].error;
};

export const getDateFormat = () => {
  const dateFormat = new Intl.DateTimeFormat(`en-US`, {
    month: `long`,
    year: `numeric`
  });

  return dateFormat;
};


