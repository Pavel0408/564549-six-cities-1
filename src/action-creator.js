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
  fetchOffersReceived: (fetchedOffers) => {
    return {
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        offers: fetchedOffers
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
  authorizationSuccess: (data) => {
    return {
      type: ActionType.AUTHORIZATION_SUCCESS,
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
  }
};
