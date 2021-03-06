import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from "./offer-card";
import {BrowserRouter} from "react-router-dom";

const offerMock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true,
  id: 0
};

const onChangeActiveOffer = () => {
};

const onChangeActivePinOffer = () => {
};

describe(`testing OfferCard render`, () => {
  it(`OfferCard is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <OfferCard
            offer={offerMock}
            onChangeActiveOffer={onChangeActiveOffer}
            onChangeActivePinOffer={onChangeActivePinOffer}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
