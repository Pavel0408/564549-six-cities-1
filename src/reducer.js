import {offers} from "./mocks/offers";

const getCityesOffers = (offersArr, activeCity) => {
  return offersArr.filter((offer) => offer.city === activeCity);
};

const activCity = `Amsterdam`;
const activeOfeers = getCityesOffers(offers, activCity);

const initialState = {
  activCity,
  activeOfeers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`
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
