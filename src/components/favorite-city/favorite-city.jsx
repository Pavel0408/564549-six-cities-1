import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {FavoriteCard} from "../favorite-card/faforite-card";

export class FavoriteCity extends PureComponent {
  constructor(props) {
    super(props);

    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  cityClickHandler(evt) {
    evt.preventDefault();
    this.props.cityClickHandler(this.props.city);
  }

  render() {
    const {favoriteCityName, favoriteOffers} = this.props;

    return <React.Fragment>.
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{favoriteCityName}</span>
            </a>
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


