import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {WithActiveItem} from "./with-active-item";
import {OffersList} from "../components/offers-list/offers-list";

configure({adapter: new Adapter()});

const offersMock = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 5,
    isPremium: false,
    isFavorite: true,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: `Amsterdam`,
    id: 0
  },
  {
    name: `Wood and stone place`,
    image: `img/room.jpg`,
    price: 80,
    rating: 10,
    isPremium: true,
    isFavorite: false,
    coordinates: [52.369553943508, 4.85309666406198],
    city: `Amsterdam`,
    id: 1
  }
];

const OffersListWithActiveItem = <WithActiveItem
  render={(data) => <OffersList {...data} offers={offersMock}/>}
/>;

describe(`testing the withActiveItem work`, () => {
  it(`call callback correctly change state`, () => {
    const offersList = mount(OffersListWithActiveItem);

    const title = offersList.find(`.place-card__name a`).first();
    title.simulate(`click`);
    expect(OffersListWithActiveItem.activeItem === offersMock[0]);
  });
});
