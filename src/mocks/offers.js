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

const cardСoordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

const cities = [
  `Paris`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];


function Offer(city, index) {
  this.name = cardTitles[index];
  this.image = cardImages[index];
  this.price = cardPrices[index];
  this.rating = getRandomNumber(0, 10);
  this.isPremium = getRandomBoolValue();
  this.isFavorite = getRandomBoolValue();
  this.coordinates = cardСoordinates[index];
  this.city = city;
}

const generateOffers = () => {
  let offers = [];
  cities.forEach((city)=>{
    const newOffers = cardTitles.map((it, index) => {
      return new Offer(city, index);
    });
    offers.push(...newOffers);
  });

  return offers;
};
export const offers = generateOffers();

