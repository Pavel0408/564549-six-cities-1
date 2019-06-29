import MockAdapter from "axios-mock-adapter";
import {createAPI} from "./api";

import {parseServerResponseOffers} from "./parse-server-response/parse-server-response-offers";
import {loadOffers} from "./operation";
import {ActionType} from "./action-type";

describe(`Operation work correctly`, () => {
  it(`Should make a correct action for call to /hotels`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);

    const loadOffersOperation = loadOffers();

    const mockServerOffers = [
      {
        'id': 1,
        'city': {
          'name': `Amsterdam`,
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
          }
        },
        'preview_image': `img/1.png`,
        'images': [`img/1.png`, `img/2.png`],
        'title': `Beautiful & luxurious studio at great location`,
        'is_favorite': false,
        'is_premium': false,
        'rating': 4.8,
        'type': `apartment`,
        'bedrooms': 3,
        'max_adults': 4,
        'price': 120,
        'goods': [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        'host': {
          'id': 3,
          'is_pro': true,
          'name': `Angelina`,
          'avatar_url': `img/1.png`
        },
        'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        }
      }
    ];

    const mockResponse = {
      data: mockServerOffers
    };

    apiMock
      .onGet(`/hotels`)
      .reply(200, mockServerOffers);

    return loadOffersOperation(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_OFFERS_RECEIVED,
          payload: {
            offers: parseServerResponseOffers(mockResponse)
          }
        }
        );
      });
  });
});
