const parseOfferFromServer = (data) => {
  return {
    name: data[`title`],
    image: data[`preview_image`],
    price: data[`price`],
    rating: Math.round(data[`rating`] * 2),
    isPremium: data[`is_premium`],
    isFavorite: data[`is_favorite`],
    coordinates: [data[`location`][`latitude`], data[`location`][`longitude`]],
    city: data[`city`][`name`],
    allImages: data[`images`],
    type: data [`type`],
    bedrooms: data[`bedrooms`],
    maxAdults: data[`max_adults`],
    goods: data[`goods`],
    host: {
      id: data[`host`][`id`],
      isPro: data[`host`][`is_pro`],
      name: data[`host`][`name`],
      avatar: data[`host`][`avatar_url`]
    },
    description: data[`description`],
    zoom: data[`location`][`zoom`],
    id: data[`id`]
  };
};

export const parseServerResponseOffers = (response) => {
  return response.data.map(parseOfferFromServer);
};

