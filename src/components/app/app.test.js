import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

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

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const tree = renderer.create(<App
      offers={offersMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
