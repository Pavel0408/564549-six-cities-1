import {ActionType} from "./action-type";

export const ActionCreator = {
  changeActiveCity: (activeCity) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: {
        activeCity
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
