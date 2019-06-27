import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesPlaces} from "./cities-places";
import {SortName} from "../../sort-functions";
import {BrowserRouter} from "react-router-dom";

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

const cityName = `Amsterdam`;
const sort = SortName.popular;

describe(`testing CitiesPlaces render`, () => {
  it(`CitiesPlaces is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <CitiesPlaces
            offers={offersMock}
            cityName={cityName}
            sort={sort}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
