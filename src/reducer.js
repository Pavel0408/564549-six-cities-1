import {offers} from "./mocks/offers";

const activeCity = `Amsterdam`;

const initialState = {
  activeCity,
  offers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`
};

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:

      return Object.assign({}, state, {
        activeCity: action.payload
      });

    case ActionType.CHANGE_OFFERS:

      return Object.assign({}, state, {
        activeOffers: action.payload
      });
  }

  return state;
};
