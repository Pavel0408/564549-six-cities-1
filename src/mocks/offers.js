import {getRandomBoolValue, getRandomNumber} from "../utils";

const cardTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const cardImages = [
  `img/apartment-01.jpg`,
  `img/room.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`
];

const cardPrices = [
  120,
  80,
  132,
  180
];

function Offer(index) {
  this.name = cardTitles[index];
  this.image = cardImages[index];
  this.price = cardPrices[index];
  this.rating = getRandomNumber(0, 10);
  this.isPremium = getRandomBoolValue();
  this.isFavorite = getRandomBoolValue();
}

export const offers = cardTitles.map((it, index) => {
  return new Offer(index);
});

