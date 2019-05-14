import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {OfferCard} from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  _generateImgHoverHandler() {
    return (evt) => {
      this.setState({
        activeCard: evt.target.closest(`article`)
      });
    };
  }

  render() {
    const {offers, titleClickHandler} = this.props;

    return offers.map((offer, i) => {
      return <OfferCard
        key={i}
        offer={offer}
        titleClickHandler={titleClickHandler}
        imgHoverHandler={this._generateImgHoverHandler()}
      />;
    }
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  titleClickHandler: PropTypes.func.isRequired
};

export default OffersList;


