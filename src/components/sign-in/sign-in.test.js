import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';
import {BrowserRouter} from "react-router-dom";

const onAuthorize = () => {};

describe(`testing SignIn render`, () => {
  it(`SignIn is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <SignIn
            onAuthorize={onAuthorize}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
