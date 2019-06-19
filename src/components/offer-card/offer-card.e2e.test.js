import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {OfferCard} from "./offer-card";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

const offerMock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true
};

describe(`testing the OfferCard work`, () => {
  it(`click on image return offers element`, () => {
    const titleOnClick = () => {};
    const imgOnClick = jest.fn();
    const card = mount(
        <BrowserRouter>
          <OfferCard
            changeActivePinOffer={imgOnClick}
            titleOnClick={titleOnClick}
            offer={offerMock}
          />
        </BrowserRouter>);

    const image = card.find(`img`);
    image.simulate(`click`);

    expect(imgOnClick).toHaveBeenCalledTimes(1);
    expect(imgOnClick).toHaveBeenCalledWith(offerMock);
  });

  it(`click on title return offers element`, () => {
    const titleOnClick = jest.fn();
    const imgOnClick = () => {};
    const card = mount(
        <BrowserRouter>
          <OfferCard
            changeActivePinOffer={imgOnClick}
            titleOnClick={titleOnClick}
            offer={offerMock}
          />
        </BrowserRouter>);

    const title = card.find(`.place-card__name a`);
    title.simulate(`click`);

    expect(titleOnClick).toHaveBeenCalledTimes(1);
    expect(titleOnClick).toHaveBeenCalledWith(offerMock);
  });
});
