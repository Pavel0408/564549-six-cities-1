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

const getRundomBoolValue = () => {
  const value = Math.random();
  return value > 0.5;
};

export const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

function Offer(index) {
  this.name = cardTitles[index];
  this.image = cardImages[index];
  this.price = cardPrices[index];
  this.rating = getRandomNumber(0, 10);
  this.isPremium = getRundomBoolValue();
  this.isFavorite = getRundomBoolValue();
}

export const offers = cardTitles.map((it, index) => {
  return new Offer(index);
});

