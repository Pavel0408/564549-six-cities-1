import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';

const authorize = () => {};

describe(`testing SignIn render`, () => {
  it(`SignIn is render correctly`, () => {
    const tree = renderer.create(<SignIn
      authorize={authorize}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
