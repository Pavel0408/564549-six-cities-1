import React from 'react';
import renderer from 'react-test-renderer';

import {OffersList} from './offers-list';

const offersMock = [
  {name: `Beautiful & luxurious apartment at great location`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 5,
    isPremium: false,
    isFavorite: true
  },
  {
    name: `Wood and stone place`,
    image: `img/room.jpg`,
    price: 80,
    rating: 10,
    isPremium: true,
    isFavorite: false
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


