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

describe(`testing the OfferCard work`, () => {
  it(`over on image return offers element`, () => {
    const titleOnClick = () => {};
    const imgOnHover = jest.fn();
    const card = mount(<OfferCard
      imgOnHover={imgOnHover}
      titleOnClick={titleOnClick}
      offer={offerMock}
    />);

    const image = card.find(`img`);
    image.simulate(`mouseOver`);

    expect(imgOnHover).toHaveBeenCalledTimes(1);
    expect(imgOnHover).toHaveBeenCalledWith(offerMock);
  });

  it(`click on title return offers element`, () => {
    const titleOnClick = jest.fn();
    const imgOnHover = () => {};
    const card = mount(<OfferCard
      imgOnHover={imgOnHover}
      titleOnClick={titleOnClick}
      offer={offerMock}
    />);

    const title = card.find(`.place-card__name a`);
    title.simulate(`click`);

    expect(titleOnClick).toHaveBeenCalledTimes(1);
    expect(titleOnClick).toHaveBeenCalledWith(offerMock);
  });
});
