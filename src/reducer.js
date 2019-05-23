import {offers} from "./mocks/offers";

const getCityesOffers = (offersArr, activeCity) => {
  return offersArr.filter((offer) => offer.city === activeCity);
};

const activeCity = `Amsterdam`;
const activeOffers = getCityesOffers(offers, activeCity);

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

    console.log(999, changedCity);
    return {
      type: ActionType.CHANGE_CITY,
      payload: changedCity
    };
  },

  changeActiveOffers: (changedCity) => {
    const filteredOffers = offers.filter((offer) => offer.city === changedCity);
    console.log(filteredOffers);
    return {
      type: ActionType.CHANGE_OFFERS,
      payload: filteredOffers
    };
  }
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      console.log(555, action.payload);
      return Object.assign({}, state, {
        activeCity: action.payload
      });

    case ActionType.CHANGE_OFFERS:
      console.log(777777, action.payload);
      return Object.assign({}, state, {
        activeOffers: action.payload
      });
  }

  return state;
};

reducer.state = initialState;
