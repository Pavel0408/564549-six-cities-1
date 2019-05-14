import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {OfferCard} from "./offer-card";

configure({adapter: new Adapter()});

const offerMock = {name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true
};

const state = {
  activeCard: null,
  clickedCard: null
};

const generateTitleClickHandler = (offer) => {
  return (evt) => {
    evt.preventDefault();

    state.clickedCard = offer;
  };
};

const generateImgHoverHandler = (offer) => {
  return () => {
    state.activeCard = offer;
  };
};

describe(`testing the OfferCard work`, () => {
  it(`over on image return offers element`, () => {
    const card = mount(<OfferCard
      imgHoverHandler={generateImgHoverHandler(offerMock)}
      titleClickHandler={generateTitleClickHandler(offerMock)}
      offer={offerMock}
    />);

    const image = card.find(`img`);
    image.simulate(`mouseOver`);
    const title = state.activeCard.name;

    expect(title === `Beautiful & luxurious apartment at great location`);
  });

  it(`click on title return offers element`, () => {
    const card = mount(<OfferCard
      imgHoverHandler={generateImgHoverHandler(offerMock)}
      titleClickHandler={generateTitleClickHandler(offerMock)}
      offer={offerMock}
    />);

    const title = card.find(`.place-card__name a`);
    title.simulate(`click`);
    const price = state.clickedCard.price;

    expect(price === 120);
  });
});
