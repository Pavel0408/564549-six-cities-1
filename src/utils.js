export const getRandomBoolValue = () => {
  const value = Math.random();
  return value > 0.5;
};

export const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};
