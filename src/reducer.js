import {offers} from "./mocks/offers";

const getCitiesOffers = (offersArr, activeCity) => {
  return offersArr.filter((offer) => offer.city === activeCity);
};

const activeCity = `Amsterdam`;
const activeOffers = getCitiesOffers(offers, activeCity);

const initialState = {
  activeCity,
  offers,
  activeOffers
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

  changeActiveOffers: (changedCity) => {
    const filteredOffers = offers.filter((offer) => offer.city === changedCity);
    return {
      type: ActionType.CHANGE_OFFERS,
      payload: filteredOffers
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

reducer.state = initialState;
