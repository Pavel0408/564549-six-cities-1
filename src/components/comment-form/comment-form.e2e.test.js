import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";
import {BrowserRouter} from "react-router-dom";

import {CommentForm} from "./comment-form";

configure({adapter: new Adapter()});

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

describe(`testing CommentForm work`, () => {
  it(`submit is call callback`, () => {
    const onSendReview = jest.fn();
    const commentForm = mount(<BrowserRouter>
      <CommentForm
        reviews={mockComments}
        activeOffer={offersMock}
        onChangeFormIsValid={changeFormIsValid}
        onSendReview={onSendReview}
      />
    </BrowserRouter>);

    const form = commentForm .find(`form`).first();
    form.simulate(`submit`, {
      preventDefault: () => {
      },
      target: [
        {
          id: 1,
          rating: 4,
          comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`
        }
      ],
    });

    expect(onSendReview).toHaveBeenCalledTimes(1);
  });
});
