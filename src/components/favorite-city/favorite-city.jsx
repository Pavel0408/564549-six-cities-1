import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import React, {PureComponent} from "react";

import {FavoriteCard} from "../favorite-card/faforite-card";

export class FavoriteCity extends PureComponent {
  constructor(props) {
    super(props);

    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  cityClickHandler() {
    this.props.cityClickHandler(this.props.favoriteCityName);
  }

  render() {
    const {favoriteCityName, favoriteOffers} = this.props;

    return <React.Fragment>.
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link to="/" className="locations__item-link" href="#" onClick={this.cityClickHandler}>
              <span>{favoriteCityName}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {favoriteOffers.map((offer, i) => {
            return <FavoriteCard
              offer={offer}
              key={`${offer.id}${i}`}
            />;
          })}
        </div>
      </li>
    </React.Fragment>;
  }
}


