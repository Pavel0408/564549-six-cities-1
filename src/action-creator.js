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
  }
};
