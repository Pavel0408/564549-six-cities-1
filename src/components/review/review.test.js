import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {Review} from "./review";

const mockComment = {
  id: 1,
  userId: 3,
  userIsPro: true,
  userName: `Angelina`,
  userAvatar: `img/1.png`,
  rating: 4,
  message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.,`,
  date: new Date(`2019-05-08T14:13:56.569Z`)
};

describe(`testing Review render`, () => {
  it(`Review is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Review
            comment={mockComment}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
