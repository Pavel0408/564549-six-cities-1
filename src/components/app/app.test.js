import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

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

const cityName = `Amsterdam`;

const cityClickHandler = () => {
};

const cities = [
  `Paris`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const loadOffers = () => {
};

const isAuthorized = () => {
};

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const tree = renderer.create(<App
      offers={offersMock}
      cityName={cityName}
      cities={cities}
      cityClickHandler={cityClickHandler}
      loadOffers={loadOffers}
      isAuthorized={isAuthorized}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
