import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {OfferCard} from "../offer-card/offer-card";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
    this._imgOnHover = this._imgOnHover.bind(this);
    this._titleOnClick = this._titleOnClick.bind(this);
  }

  _imgOnHover(offer) {
    this.setState({
      activeCard: offer
    });
  }

  _titleOnClick(offer) {
    return offer;
  }

  render() {
    const {offers} = this.props;
    return offers.map((offer, i) => {
      return <OfferCard
        key={i}
        offer={offer}
        titleOnClick={this._titleOnClick}
        imgOnHover={this._imgOnHover}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};
