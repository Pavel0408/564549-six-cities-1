import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {PlaceCard} from "../place-card/place-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {offers, titleClickHandler} = this.props;

    return offers.map((offer, i) => {
      const card = offers[i];

      return <PlaceCard key={i} offer={offer} titleClickHandler={titleClickHandler}
        imgHoverHandler={this._imgHoverHandler(card)}/>;
    }
    );
  }

  _imgHoverHandler(card) {

    return () => {
      this.setState({
        activeCard: card
      });
    };
  }
}

export default OffersList;


