import React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter} from "react-router-dom";
import {FavoriteEmpty} from "./favorite-empty";

const user = null;
const onFetchFavorite = () => {};

describe(`testing FavoriteEmpty render`, () => {
  it(`Favorite Empty is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <FavoriteEmpty
            user={user}
            onFetchFavorite={onFetchFavorite}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
