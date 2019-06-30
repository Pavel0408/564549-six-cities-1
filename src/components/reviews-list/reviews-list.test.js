import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {ReviewsList} from "./reviews-list";

const dateFormat = new Intl.DateTimeFormat(`en-US`, {
  month: `long`,
  year: `numeric`
});


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

const user = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  avatar: `img/1.png`,
  isPro: false
};

describe(`testing ReviewList render`, () => {
  it(`ReviewList is render correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <ReviewsList
            reviews={mockComments}
            activeOffer={offersMock}
            user={user}
            dateFormat={dateFormat}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
