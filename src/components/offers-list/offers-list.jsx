import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {OfferCard} from "../offer-card/offer-card";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.imgOnClick = props.onChange;
    this.titleOnClick = this.titleOnClick.bind(this);
  }

  titleOnClick(offer) {
    return offer;
  }

  render() {
    const {offers} = this.props;
    return offers.map((offer, i) => {
      return <OfferCard
        key={i}
        offer={offer}
        titleOnClick={this.titleOnClick}
        imgOnClick={this.imgOnClick}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: offersPropTypes,
  onChange: PropTypes.func
};
