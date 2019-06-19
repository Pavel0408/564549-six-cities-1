import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {OfferCard} from "../offer-card/offer-card";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

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
    const {offers, changeActiveOffer} = this.props;
    return offers.map((offer) => {
      return <OfferCard
        key={`${offer.id}${this.props.sort}`}
        offer={offer}
        titleOnClick={changeActiveOffer}
        changeActivePinOffer={this.props.changeActivePinOffer}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: offersPropTypes,
  onChange: PropTypes.func,
  activeItem: PropTypes.object,
  changeActiveOffer: PropTypes.func
};
