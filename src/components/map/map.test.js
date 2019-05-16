import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from "./map";

const offersMock = [
  {name: `Beautiful & luxurious apartment at great location`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 5,
    isPremium: false,
    isFavorite: true,
    coordinate: [52.3909553943508, 4.85309666406198]
  },
  {
    name: `Wood and stone place`,
    image: `img/room.jpg`,
    price: 80,
    rating: 10,
    isPremium: true,
    isFavorite: false,
    coordinate: [52.369553943508, 4.85309666406198]
  }
];

describe(`testing Map render`, () => {
  it(`Map is render correctly`, () => {
    const tree = renderer.create(<Map
      offers={offersMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
