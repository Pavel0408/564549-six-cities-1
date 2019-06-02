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
  loadingOffers: (bool) => {
    return {
      type: ActionType.FETCH_OFFERS_LOADING,
      payload: {
        isLoading: bool
      }
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
  fetchOffersFailed: (err) => {
    return {
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error: err
      }
    };
  }
};
