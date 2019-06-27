import React from 'react';
import renderer from 'react-test-renderer';

import {SortName} from "../../sort-functions";
import {BrowserRouter} from "react-router-dom";
import {CitiesPlacesEmpty} from "./cities-places-empty";

const offersMock = [];
const cityName = `Amsterdam`;
const sort = SortName.popular;

describe(`testing CitiesPlacesEmpty render`, () => {
  it(`CitiesPlacesEmpty is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <CitiesPlacesEmpty
            offers={offersMock}
            cityName={cityName}
            sort={sort}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
