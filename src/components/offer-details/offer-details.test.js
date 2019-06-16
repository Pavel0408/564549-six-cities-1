import React from 'react';
import renderer from 'react-test-renderer';


import {parseServerResponseOffers} from "../../parse-server-response/parse-server-response-offers";
import {BrowserRouter} from "react-router-dom";
import {OfferDetails} from "./offer-details";

const mockServerOffers = {
  data: [
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
  ]

};

const offerMock = parseServerResponseOffers(mockServerOffers);
const fetchReviews = () => {};

describe(`testing OfferDetails render`, () => {
  it(`OfferDetails is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <OfferDetails
            activeOffer={offerMock[0]}
            isAuthorizationRequired={false}
            user={null}
            offers={offerMock}
            fetchReviews={fetchReviews}
            cityName={`Amsterdam`}
            reviews={[]}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
