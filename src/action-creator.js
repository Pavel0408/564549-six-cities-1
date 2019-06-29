import {ActionType} from "./action-type";

export const changeActiveCity = (cityName) => {
  return {
    type: ActionType.CHANGE_CITY,
    payload: {
      cityName
    }
  };
};
export const loadingOffers = () => {
  return {
    type: ActionType.FETCH_OFFERS_LOADING
  };
};
export const loadingFavorite = () => {
  return {
    type: ActionType.FAVORITE_LOADING
  };
};
export const fetchOffersReceived = (fetchedOffers) => {
  return {
    type: ActionType.FETCH_OFFERS_RECEIVED,
    payload: {
      offers: fetchedOffers
    }
  };
};
export const fetchFavoriteReceived = (fetchedOffers) => {
  return {
    type: ActionType.FAVORITE_RECEIVED,
    payload: {
      favoriteOffers: fetchedOffers
    }
  };
};
export const fetchOffersFailed = (error) => {
  return {
    type: ActionType.FETCH_OFFERS_FAILED,
    payload: {
      error
    }
  };
};
export const fetchFavoriteFailed = (error) => {
  return {
    type: ActionType.FETCH_FAVORITE_FAILED,
    payload: {
      error
    }
  };
};
export const authorization = (data) => {
  return {
    type: ActionType.AUTHORIZATION,
    payload: {
      user: data
    }
  };
};
export const authorizationFailed = () => {
  return {
    type: ActionType.AUTHORIZATION_FAILED,
    payload: {
      user: null
    }
  };
};
export const setActiveOffer = (offer) => {
  return {
    type: ActionType.ACTIVE_OFFER,
    payload: {
      activeOffer: offer
    }
  };
};
export const fetchReviewsSuccess = (reviews) => {
  return {
    type: ActionType.FETCH_REVIEWS_SUCCESS,
    payload: {
      reviews
    }
  };
};
export const fetchReviewsFailed = (error) => {
  return {
    type: ActionType.FETCH_REVIEWS_FAILED,
    payload: {
      error
    }
  };
};
export const changeSort = (sort) => {
  return {
    type: ActionType.CHANGE_SORT,
    payload: {
      sort
    }
  };
};
export const changeActivePinOffer = (offer) => {
  return {
    type: ActionType.ACTIVE_PIN_OFFER_CHANGE,
    payload: {
      activePinOffer: offer
    }
  };
};
export const sendingReviews = () => {
  return {
    type: ActionType.SENDING_REVIEWS
  };
};
export const sendingReviewsError = (sendingError) => {
  return {
    type: ActionType.SENDING_REVIEWS_ERROR,
    payload: {
      sendingError
    }
  };
};

