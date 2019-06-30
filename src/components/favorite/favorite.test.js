import React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter} from "react-router-dom";
import {Favorite} from "./favorite";

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

const user = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  avatar: `img/1.png`,
  isPro: false
};

const favoriteCityNames = [
  `Amsterdam`
];

const fetchFavorite = () => {};

describe(`testing Favorite render`, () => {
  it(`Favorite is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Favorite
            favoriteOffers={offersMock}
            user={user}
            onFetchFavorite={fetchFavorite}
            favoriteCityNames={favoriteCityNames}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
