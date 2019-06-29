import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {UserEmptyElement} from "./user-empty-element";

describe(`testing UserEmptyElement render`, () => {
  it(`UserEmptyElement is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <UserEmptyElement
            user={null}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


