import React from 'react';
import renderer from 'react-test-renderer';

import {MainScreen} from './main-screen';

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

describe(`testing MainScreen render`, () => {
  it(`MainScreen is render correctly`, () => {
    const tree = renderer.create(<MainScreen
      offers={offersMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
