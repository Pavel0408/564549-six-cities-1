import {ActionType} from "./action-type";

export const ActionCreator = {
  changeActiveCity: (changedCity) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: changedCity
    };
  },

  changeActiveOffers: (newOffers) => {
    return {
      type: ActionType.CHANGE_OFFERS,
      payload: newOffers
    };
  }
};
