import {ActionType} from "./action-type";

export const ActionCreator = {
  changeActiveCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: {
        cityName
      }
    };
  },
  loadingOffers: () => {
    return {
      type: ActionType.FETCH_OFFERS_LOADING
    };
  },
  loadingFavorite: () => {
    return {
      type: ActionType.FAVORITE_LOADING
    };
  },
  fetchOffersReceived: (fetchedOffers) => {
    return {
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        offers: fetchedOffers
      }
    };
  },
  fetchFavoriteReceived: (fetchedOffers) => {
    return {
      type: ActionType.FAVORITE_RECEIVED,
      payload: {
        favoriteOffers: fetchedOffers
      }
    };
  },
  fetchOffersFailed: (error) => {
    return {
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error
      }
    };
  },
  fetchFavoriteFailed: (error) => {
    return {
      type: ActionType.FETCH_FAVORITE_FAILED,
      payload: {
        error
      }
    };
  },
  authorization: (data) => {
    return {
      type: ActionType.AUTHORIZATION,
      payload: {
        user: data
      }
    };
  },
  authorizationFailed: (error) => {
    return {
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: error
      }
    };
  },
  setActiveOffer: (offer) => {
    return {
      type: ActionType.ACTIVE_OFFER,
      payload: {
        activeOffer: offer
      }
    };
  },
  fetchReviewsSuccess: (reviews) => {
    return {
      type: ActionType.FETCH_REVIEWS_SUCCESS,
      payload: {
        reviews
      }
    };
  },
  fetchReviewsFailed: (error) => {
    return {
      type: ActionType.FETCH_REVIEWS_FAILED,
      payload: {
        error
      }
    };
  },
  changeSort: (sort) => {
    return {
      type: ActionType.CHANGE_SORT,
      payload: {
        sort
      }
    };
  },
  changeActivePinOffer: (offer) => {
    return {
      type: ActionType.ACTIVE_PIN_OFFER_CHANGE,
      payload: {
        activePinOffer: offer
      }
    };
  },
  sendingReviews: () => {
    return {
      type: ActionType.SENDING_REVIEWS
    };
  },
  sendingReviewsError: (sendingError) => {
    return {
      type: ActionType.SENDING_REVIEWS_ERROR,
      payload: {
        sendingError
      }
    };
  }
};
