import {fetchOffersReducer} from "./fetch-offers-reducer";
import {ActionType} from "../action-type";

describe(`fetchOffersReducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(fetchOffersReducer(undefined, {})).toEqual({
      isLoading: false,
      error: null,
      offers: []
    });
  });
  it(`correctly change state when offers is loading`, () => {
    const offersLoadingActon = {
      type: ActionType.FETCH_OFFERS_LOADING,
      payload: {
        isLoading: true
      }
    };
    expect(fetchOffersReducer({}, offersLoadingActon)).toEqual({
      isLoading: true,
      error: null
    });
  });
  it(`correctly change state when offers loaded with error`, () => {
    const offersErrorAction = {
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error: `error`
      }
    };
    expect(fetchOffersReducer({}, offersErrorAction)).toEqual({
      error: `error`,
      isLoading: false
    });
  });
  it(`correctly change offers`, () => {
    const state = {
      offers: []
    };
    const offersMock = [
      {
        name: `Beautiful & luxurious apartment at great location`,
        image: `img/apartment-01.jpg`,
        price: 120,
        rating: 5,
        isPremium: false,
        isFavorite: true,
        coordinates: [52.3909553943508, 4.85309666406198],
        city: `Amsterdam`,
        id: 0
      },
      {
        name: `Wood and stone place`,
        image: `img/room.jpg`,
        price: 80,
        rating: 10,
        isPremium: true,
        isFavorite: false,
        coordinates: [52.369553943508, 4.85309666406198],
        city: `Amsterdam`,
        id: 1
      }
    ];

    const offersChangeAction = {
      type: `FETCH_OFFERS_RECEIVED`,
      payload: {
        offers: offersMock
      }
    };
    expect(fetchOffersReducer(state, offersChangeAction)).toEqual({
      offers: offersMock,
      isLoading: false,
      error: null
    });
  });
});
