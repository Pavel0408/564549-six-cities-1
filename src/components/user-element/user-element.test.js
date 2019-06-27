import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {UserElement} from "./user-element";

const user = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  avatar: `img/1.png`,
  isPro: false
};

describe(`testing UserElement render`, () => {
  it(`UserElement is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <UserElement
            user={user}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


