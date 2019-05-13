import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {App} from "./app";

configure({adapter: new Adapter()});

const cardTitlesMock = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

describe(`testing the App work`, () => {
  it(`click card title calls ths handler`, () => {
    const titleClickHandler = jest.fn();
    const app = mount(<App
      cardTitles={cardTitlesMock}
      titleClickHandler={titleClickHandler}
    />);

    const titles = app.find(`.place-card__name a`);
    titles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(titleClickHandler).toHaveBeenCalledTimes(cardTitlesMock.length);
  });
});
