import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import React, {PureComponent} from "react";

import {FavoriteCard} from "../favorite-card/faforite-card";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

export class FavoriteCity extends PureComponent {
  constructor(props) {
    super(props);

    this.cityClickHandle = this.cityClickHandle.bind(this);
  }

  cityClickHandle() {
    this.props.onCityClick(this.props.favoriteCityName);
  }

  render() {
    const {favoriteCityName, favoriteOffers, onChangeActiveOffer, onFetchReviews, onChangeFavorite} = this.props;

    return <React.Fragment>.
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link to="/" className="locations__item-link" href="#" onClick={this.onCityClick}>
              <span>{favoriteCityName}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {favoriteOffers.map((offer, i) => {
            return <FavoriteCard
              offer={offer}
              key={`${offer.id}${i}`}
              onChangeActiveOffer={onChangeActiveOffer}
              onFetchReviews={onFetchReviews}
              onChangeFavorite={onChangeFavorite}
            />;
          })}
        </div>
      </li>
    </React.Fragment>;
  }
}

FavoriteCity.propTypes = {
  onCityClick: PropTypes.func,
  favoriteCityName: PropTypes.string,
  favoriteOffers: PropTypes.arrayOf(offerPropTypes),
  onChangeActiveOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  onChangeFavorite: PropTypes.func
};


