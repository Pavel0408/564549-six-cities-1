import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {OfferCard} from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      clickedCard: null
    };
  }

  _generateImgHoverHandler(offer) {
    return () => {
      this.setState({
        activeCard: offer
      });
    };
  }

  _generateTitleClickHandler(offer) {
    return (evt) => {
      evt.preventDefault();
      this.setState({
        clickedCard: offer
      });
    };
  }

  render() {
    const {offers} = this.props;

    return offers.map((offer, i) => {
      return <OfferCard
        key={i}
        offer={offer}
        titleClickHandler={this._generateTitleClickHandler(offer)}
        imgHoverHandler={this._generateImgHoverHandler(offer)}
      />;
    }
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;


