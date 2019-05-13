import React from 'react';
import renderer from 'react-test-renderer';

import {PlaceCard} from "./place-card";

const offerMock = {name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true
};

const titleClickHandler = () => {
};

const state = {
  activeCard: null
};

const generateImgHoverHandler = () => {
  return (evt) => {
    state.activeCard = evt.target.closest(`article`);
  };
};

describe(`testing PlaceCard render`, () => {
  it(`PlaceCard is render correctly`, () => {
    const tree = renderer.create(<PlaceCard
      offer={offerMock}
      titleClickHandler={titleClickHandler}
      imgHoverHandler={generateImgHoverHandler()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
