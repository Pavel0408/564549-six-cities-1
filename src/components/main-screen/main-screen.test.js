import React from 'react';
import renderer from 'react-test-renderer';

import {MainScreen} from './main-screen';

const cardTitlesMock = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const titleClickHandler = () => {
};

describe(`testing MainScreen render`, () => {
  it(`MainScreen is render correctly`, () => {
    const tree = renderer.create(<MainScreen
      cardTitles={cardTitlesMock}
      titleClickHandler={titleClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
