import React from 'react';
import renderer from 'react-test-renderer';

import {PlaceCard} from "./place-card";

const nameMock = `Beautiful & luxurious apartment at great location`;

describe(`testing PlaceCard render`, () => {
  it(`PlaceCard is render correctly`, () => {
    const tree = renderer.create(<PlaceCard name={nameMock}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
