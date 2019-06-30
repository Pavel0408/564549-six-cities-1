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
    const onChangeActiveOffer = () => {};
    const onChangeActivePinOffer = jest.fn();
    const onFetchReviews = () => {};
    const card = mount(
        <BrowserRouter>
          <OfferCard
            onChangeActivePinOffer={onChangeActivePinOffer}
            onChangeActiveOffer={onChangeActiveOffer}
            offer={offerMock}
            onFetchReviews={onFetchReviews}
          />
        </BrowserRouter>);

    const image = card.find(`img`);
    image.simulate(`click`);

    expect(onChangeActivePinOffer).toHaveBeenCalledTimes(1);
    expect(onChangeActivePinOffer).toHaveBeenCalledWith(offerMock);
  });

  it(`click on title return offers element`, () => {
    const onChangeActiveOffer = jest.fn();
    const onChangeActivePinOffer = () => {};
    const onFetchReviews = () => {};
    const card = mount(
        <BrowserRouter>
          <OfferCard
            onChangeActivePinOffer={onChangeActivePinOffer}
            onChangeActiveOffer={onChangeActiveOffer}
            offer={offerMock}
            onFetchReviews={onFetchReviews}
          />
        </BrowserRouter>);

    const title = card.find(`.place-card__name a`);
    title.simulate(`click`);

    expect(onChangeActiveOffer).toHaveBeenCalledTimes(1);
    expect(onChangeActiveOffer).toHaveBeenCalledWith(offerMock);
  });
});
