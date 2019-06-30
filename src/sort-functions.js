export const SortName = {
  POPULAR: `popular`,
  PRICE_LOW: `priceLow`,
  PRICE_HIGH: `priceHigh`,
  TOP_RATED: `topRated`
};

export const SortText = {
  [SortName.POPULAR]: `Popular`,
  [SortName.PRICE_LOW]: `Price: low to high`,
  [SortName.PRICE_HIGH]: `Price: high to low`,
  [SortName.TOP_RATED]: `Top rated first`
};

export const SortFunctions = {
  [SortName.TOP_RATED]: (offerFirst, offerSecond) => {
    return offerSecond.rating - offerFirst.rating;
  },
  [SortName.PRICE_HIGH]: (offerFirst, offerSecond) => {
    return offerSecond.price - offerFirst.price;
  },
  [SortName.PRICE_LOW]: (offerFirst, offerSecond) => {
    return offerFirst.price - offerSecond.price;
  },
  [SortName.POPULAR]: (offerFirst, offerSecond) => {
    return offerFirst.id - offerSecond.id;
  }
};
