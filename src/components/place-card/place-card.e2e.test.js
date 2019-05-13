import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {PlaceCard} from "./place-card";

configure({adapter: new Adapter()});

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

describe(`testing the PlaceCard work`, () => {
  it(`click on image return card element`, () => {
    const card = mount(<PlaceCard
      imgHoverHandler={generateImgHoverHandler()}
      titleClickHandler={titleClickHandler}
      offer={offerMock}
    />);

    const image = card.find(`img`);
    image.simulate(`mouseOver`);
    const title = state.activeCard.querySelectorAll(`.place-card__name a`);

    expect(title.length === 1);
  });
});
