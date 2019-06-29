import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {OfferCard} from "../offer-card/offer-card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.imgOnClick = props.onChange;
    this.activeCard = props.activeItem;
    this.titleOnClick = this.titleOnClick.bind(this);
  }

  titleOnClick(offer) {
    return offer;
  }

  render() {
    const {offers, changeActiveOffer, changeFavorite} = this.props;
    return offers.map((offer) => {
      return <OfferCard
        key={`${offer.id}${this.props.sort}${offer.isFavorite}`}
        offer={offer}
        titleOnClick={changeActiveOffer}
        changeActivePinOffer={this.props.changeActivePinOffer}
        fetchReviews={this.props.fetchReviews}
        changeFavorite={changeFavorite}
        isFavorite={offer.isFavorite}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  onChange: PropTypes.func,
  activeItem: offerPropTypes,
  changeActiveOffer: PropTypes.func,
  sort: PropTypes.string,
  changeActivePinOffer: PropTypes.func,
  fetchReviews: PropTypes.func,
  changeFavorite: PropTypes.func
};
