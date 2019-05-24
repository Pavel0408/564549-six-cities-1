import React from 'react';
import renderer from 'react-test-renderer';

import {MainScreen} from './main-screen';

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

const cities = [
  `Paris`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const cityClickHandler = () => {
};

const activeCity = `Amsterdam`;

describe(`testing MainScreen render`, () => {
  it(`MainScreen is render correctly`, () => {
    const tree = renderer.create(<MainScreen
      offers={offersMock}
      cities={cities}
      activeCity={activeCity}
      cityClickHandler={cityClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
