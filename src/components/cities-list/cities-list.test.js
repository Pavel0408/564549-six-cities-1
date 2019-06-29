import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';

const activeCity = `Amsterdam`;
const cityClickHandle = () => {
};
const cities = [
  `Paris`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

describe(`testing CitiesList render`, () => {
  it(`CitiesList is render correctly`, () => {
    const tree = renderer.create(<CitiesList
      cities={cities}
      activeCity={activeCity}
      cityClickHandle={cityClickHandle}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
