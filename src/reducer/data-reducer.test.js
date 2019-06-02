import {dataReducer} from './data-reducer';
import {randomOffers as offers} from "../mocks/offers";

describe(`Data reducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(dataReducer(undefined, {})).toEqual({
      cityName: `Amsterdam`
    });
  });
  it(`correctly change city`, () => {
    const state = {
      cityName: `Amsterdam`,
      offers
    };

    const cityChangeAction = {
      type: `CHANGE_CITY`,
      payload: {
        cityName: `Brussels`
      }
    };
    expect(dataReducer(state, cityChangeAction)).toEqual({
      cityName: `Brussels`,
      offers
    });
  });
  it(`returns state on incorrect action`, () => {
    const offersMock = [
      {
        name: `Beautiful & luxurious apartment at great location`,
        image: `img/apartment-01.jpg`,
        price: 120,
        rating: 5,
        isPremium: false,
        isFavorite: true,
        coordinates: [52.3909553943508, 4.85309666406198],
        city: `Amsterdam`
      },
      {
        name: `Wood and stone place`,
        image: `img/room.jpg`,
        price: 80,
        rating: 10,
        isPremium: true,
        isFavorite: false,
        coordinates: [52.369553943508, 4.85309666406198],
        city: `Amsterdam`
      }
    ];

    const state = {
      cityName: `Brussels`,
      offers: offersMock
    };
    const incorrectAction = {
      type: `INCORRECT_ACTION`,
      payload: {
        offers: offersMock
      }
    };
    expect(dataReducer(state, incorrectAction)).toEqual(state);
  });
});
