import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {BrowserRouter} from "react-router-dom";
import {OfferDetails} from "./offer-details";
import {parseServerResponseOffers} from "../../parse-server-response/parse-server-response-offers";

configure({adapter: new Adapter()});

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
}

const offersMock = parseServerResponseOffers(mockServerOffers);
const fetchReviews = () => {};

describe(`testing OfferDetails work`, () => {
  it(`click on favorite button is call callback`, () => {
    const onChangeFavorite = jest.fn();
    const onChangeBookmarkIsActive = () => {};
    const offerDetails = mount(<BrowserRouter>
      <OfferDetails
        activeOffer={offersMock[0]}
        nearestOffers={offersMock}
        offersOnMap={offersMock}
        isAuthorizationRequired={false}
        user={null}
        offers={offersMock}
        onFetchReviews={fetchReviews}
        cityName={`Amsterdam`}
        reviews={[]}
        onChangeBookmarkIsActive={onChangeBookmarkIsActive}
        onChangeFavorite={onChangeFavorite}
      />
    </BrowserRouter>);

    const favoriteButton = offerDetails.find(`.property__bookmark-button`);
    favoriteButton.simulate(`click`);

    expect(onChangeFavorite).toHaveBeenCalledTimes(1);
    expect(onChangeFavorite).toHaveBeenCalledWith({
      id: 1,
      status: 1
    });
  });
});
