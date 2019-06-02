import {NameSpace} from "./name-space";

const data = NameSpace.DATA;
const fetchOffers = NameSpace.FETCH_OFFERS;

export const getOffers = (state) => {
  console.log(state);
  return state[fetchOffers].offers;
};

export const getCityName = (state) => {
  return state[data].cityName;
};

export const getOffersIsLoading = (state) => {
  return state[fetchOffers].isLoading;
};

export const getOffersIsLoaded = (state) => {
  return state[fetchOffers].isLoaded;
};

export const getOffersIsFailed = (state) => {
  return state[fetchOffers].isFailed;
};

export const getOffersLoadError = (state) => {
  return state[fetchOffers].error;
};
