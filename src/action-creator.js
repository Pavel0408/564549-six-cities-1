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
  changeActiveOffers: (offers) => {
    return {
      type: ActionType.CHANGE_OFFERS,
      payload: {
        offers
      }
    };
  },
  fetchOffers: () => {
    return {
      type: ActionType.FETCH_OFFERS,
      payload: {
        isLoading: true,
        isFailed: false,
        isLoaded: false
      }
    };
  },
  fetchOffersReceived: () => {
    return {
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        isLoading: false,
        isFailed: false,
        isLoaded: true
      }
    };
  },
  fetchOffersFailed: (err) => {
    return {
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        isLoading: false,
        isLoaded: false,
        isFailed: true,
        error: err
      }
    };
  }
};
