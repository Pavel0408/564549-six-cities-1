import React, {PureComponent} from "react";

import {OfferCard} from "../offer-card/offer-card";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
    this.imgOnHover = this.imgOnHover.bind(this);
    this.titleOnClick = this.titleOnClick.bind(this);
  }

  imgOnHover(offer) {
    this.setState({
      activeCard: offer
    });
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
        imgOnHover={this.imgOnHover}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: offersPropTypes
};
