import React from 'react';
import renderer from 'react-test-renderer';

import {OffersList} from './offers-list';

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

const titleClickHandler = () => {
};

describe(`testing OffersList render`, () => {
  it(`OffersList is render correctly`, () => {
    const tree = renderer.create(<OffersList
      offers={offersMock}
      titleClickHandler={titleClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


