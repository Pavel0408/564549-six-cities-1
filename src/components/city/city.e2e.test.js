import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {City} from "./city";

configure({adapter: new Adapter()});

describe(`testing the City work`, () => {
  it(`click on city name returns city name`, () => {
    const activeCity = `Amsterdam`;
    const onCityClick = jest.fn();
    const city = mount(<City
      key={`city-${1}`}
      city = {activeCity}
      isActive = {true}
      onCityClick={onCityClick}
    />);

    const title = city.find(`.tabs__item--active`);
    title.simulate(`click`);

    expect(onCityClick).toHaveBeenCalledTimes(1);
    expect(onCityClick).toHaveBeenCalledWith(activeCity);
  });
});
