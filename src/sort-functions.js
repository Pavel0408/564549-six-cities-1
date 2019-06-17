export const SortName = {
  popular: `popular`,
  priceLow: `priceLow`,
  priceHigh: `priceHigh`,
  topRated: `topRated`
};

export const SortText = {
  popular: `Popular`,
  priceLow: `Price: low to high`,
  priceHigh: `Price: high to low`,
  topRated: `Top rated first`
};

export const SortFunctions = {
  [SortName.topRated]: (offerFirst, offerSecond) => {
    return offerSecond.rating - offerFirst.rating;
  },
  [SortName.priceHigh]: (offerFirst, offerSecond) => {
    return offerSecond.price - offerFirst.price;
  },
  [SortName.priceLow]: (offerFirst, offerSecond) => {
    return offerFirst.price - offerSecond.price;
  },
  [SortName.popular]: () => {
    return 0;
  }
};
