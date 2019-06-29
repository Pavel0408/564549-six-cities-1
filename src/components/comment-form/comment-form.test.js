import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {CommentForm} from "./comment-form";

const mockComments = [
  {
    id: 1,
    userId: 3,
    userIsPro: true,
    userName: `Angelina`,
    userAvatar: `img/1.png`,
    rating: 4,
    message: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.,`,
    date: new Date(`2019-05-08T14:13:56.569Z`)
  }
];

const offersMock = {
  name: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  isPremium: false,
  isFavorite: true,
  coordinates: [52.3909553943508, 4.85309666406198],
  city: `Amsterdam`,
  id: 0
};
const changeFormIsValid = () => {};

describe(`testing CommentForm render`, () => {
  it(`CommentForm is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <CommentForm
            reviews={mockComments}
            activeOffer={offersMock}
            changeFormIsValid={changeFormIsValid}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
