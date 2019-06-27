import React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter} from "react-router-dom";
import {FavoriteEmpty} from "./favorite-empty";

const user = null;
const fetchFavorite = () => {};

describe(`testing FavoriteEmpty render`, () => {
  it(`Favorite Empty is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <FavoriteEmpty
            user={user}
            fetchFavorite={fetchFavorite}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
