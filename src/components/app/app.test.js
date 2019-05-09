import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const cardTitlesMock = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const tree = renderer.create(<App
      cardTitles={cardTitlesMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
