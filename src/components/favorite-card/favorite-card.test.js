import React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter} from "react-router-dom";
import {FavoriteCard} from "./faforite-card";

const offerMock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true,
  id: 0
};

const titleOnClick = () => {
};

describe(`testing FavoriteCard render`, () => {
  it(`FavoriteCard is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <FavoriteCard
            offer={offerMock}
            titleOnClick={titleOnClick}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
