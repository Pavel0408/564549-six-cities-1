export class OfferModel {
  constructor(data) {
    this.name = data.name;
    this.image = data.image;
    this.price = data.price;
    this.rating = data.rating;
    this.isPremium = data.isPremium;
    this.isFavorite = data.isFavorite;
    this.coordinates = data.coordinates;
    this.city = data.city;
    this.allImages = data.allImages;
    this.type = data.type;
    this.bedrooms = data.bedrooms;
    this.maxAdults = data.maxAdults;
    this.goods = data.goods;
    this.host = {
      id: data.host.id,
      isPro: data.host.isPro,
      name: data.host.name,
      avatar: data.host.avatar
    };
    this.description = data.descritption;
    this.zoom = data.zoom;
    this.id = data.id;
  }

  static parse(data) {
    return new OfferModel({
      name: data[`title`],
      image: data[`preview_image`],
      price: data[`price`],
      rating: Math.random(data[`rating`] * 2),
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
      zoom: data[`zoom`],
      id: data[`id`]
    });
  }

  static parseServerData(response) {
    console.log(response);
    return response.data.map(OfferModel.parse);
  }
}
