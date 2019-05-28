import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';

const activeCity = `Amsterdam`;
const cityClickHandler = () => {
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
      cityClickHandler={cityClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
