import React from 'react';
import renderer from 'react-test-renderer';
import {City} from './city';

const activeCity = `Amsterdam`;
const cityClickHandler = () => {
};

describe(`testing City render`, () => {
  it(`City is render correctly`, () => {
    const tree = renderer.create(<City
      key={`city-${1}`}
      city = {activeCity}
      isActive = {true}
      cityClickHandler={cityClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
