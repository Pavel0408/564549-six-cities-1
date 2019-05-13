import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {App} from "./app";

configure({adapter: new Adapter()});

const offersMock = [
  {name: `Beautiful & luxurious apartment at great location`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 5,
    isPremium: false,
    isFavorite: true
  },
  {
    name: `Wood and stone place`,
    image: `img/room.jpg`,
    price: 80,
    rating: 10,
    isPremium: true,
    isFavorite: false
  }
];

describe(`testing the App work`, () => {
  it(`click card title calls ths handler`, () => {
    const titleClickHandler = jest.fn();
    const app = mount(<App
      offers={offersMock}
      titleClickHandler={titleClickHandler}
    />);

    const titles = app.find(`.place-card__name a`);
    titles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(titleClickHandler).toHaveBeenCalledTimes(offersMock.length);
  });
});
