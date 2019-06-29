import React from 'react';
import renderer from 'react-test-renderer';
import {City} from './city';

const activeCity = `Amsterdam`;
const cityClickHandle = () => {
};

describe(`testing City render`, () => {
  it(`City is render correctly`, () => {
    const tree = renderer.create(<City
      key={`city-${1}`}
      city = {activeCity}
      isActive = {true}
      cityClickHandle={cityClickHandle}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
