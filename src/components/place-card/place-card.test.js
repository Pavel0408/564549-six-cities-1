import React from 'react';
import renderer from 'react-test-renderer';

import {PlaceCard} from "./place-card";

const nameMock = `Beautiful & luxurious apartment at great location`;

const titleClickHandler = () => {
};

describe(`testing PlaceCard render`, () => {
  it(`PlaceCard is render correctly`, () => {
    const tree = renderer.create(<PlaceCard
      name={nameMock}
      titleClickHandler={titleClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
