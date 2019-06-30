import PropTypes from "prop-types";
import React from "react";

import {OfferCard} from "../offer-card/offer-card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

export const OffersList = (props) => {
  const {offers, onChangeActiveOffer, onChangeFavorite, onFetchReviews, sort, onChangeActivePinOffer} = props;

  return offers.map((offer) => {
    return <OfferCard
      key={`${offer.id}${sort}${offer.isFavorite}`}
      offer={offer}
      onChangeActiveOffer={onChangeActiveOffer}
      onChangeActivePinOffer={onChangeActivePinOffer}
      onFetchReviews={onFetchReviews}
      onChangeFavorite={onChangeFavorite}
      isFavorite={offer.isFavorite}
    />;
  });
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  onChange: PropTypes.func,
  activeItem: offerPropTypes,
  onChangeActiveOffer: PropTypes.func,
  sort: PropTypes.string,
  onChangeActivePinOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  onChangeFavorite: PropTypes.func
};
