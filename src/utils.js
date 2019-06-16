export const getRandomBoolValue = () => {
  const value = Math.random();
  return value > 0.5;
};

export const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

export const getRandomIndex = (arr) => {
  return getRandomNumber(0, arr.length - 1);
};

export const getRandomValue = (arr) => {
  return arr[getRandomIndex(arr)];
};

export const getRandomCoordinates = (coordinates) => {
  const getRandomCoordinate = (number) => {
    number = number * 100;
    const first = number - 5;
    const second = number + 5;
    return getRandomNumber(first, second) / 100;
  };

  return coordinates.map(getRandomCoordinate);
};

export const toRad = (x) => {
  return (x * Math.PI) / 180;
};

export const getDistanceFromCoords = ({coordinateFirst, coordinateSecond}) => {
  const EARTH_RADIUS = 6371; // km;

  coordinateFirst.map((coord) => parseInt(coord, 10));
  coordinateSecond.map((coord) => parseInt(coord, 10));
  const [latFirst, longFirst] = coordinateFirst;
  const [latSecond, longSecond] = coordinateSecond;

  const x1 = latSecond - latFirst;
  const dLat = toRad(x1);
  const x2 = longSecond - longFirst;
  const dLon = toRad(x2);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(latFirst)) * Math.cos(toRad(latSecond)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * c;
};
