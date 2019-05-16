import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from "./offer-card";

const offerMock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true
};

const titleOnClick = () => {
};

const imgOnHover = () => {
};

describe(`testing OfferCard render`, () => {
  it(`OfferCard is render correctly`, () => {
    const tree = renderer.create(<OfferCard
      offer={offerMock}
      titleOnClick={titleOnClick}
      imgOnHover={imgOnHover}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
