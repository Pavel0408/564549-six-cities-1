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
  const getRundomCoordinate = (number) => {
    number = number * 100;
    const first = number - 5;
    const second = number + 5;
    return getRandomNumber(first, second) / 100;
  };

  return coordinates.map(getRundomCoordinate);
};
