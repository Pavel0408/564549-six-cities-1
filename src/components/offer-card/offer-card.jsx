import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../prop-types/offer-prop-types";

export class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    const {offer} = props;
    this._offer = offer;
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.favoriteRef = React.createRef();
  }

  handleTitleClick() {
    const {onChangeActiveOffer, onChangeActivePinOffer, onFetchReviews} = this.props;
    onChangeActiveOffer(this._offer);
    onChangeActivePinOffer(this._offer);
    onFetchReviews(this._offer.id);
  }

  handleImgClick(evt) {
    const {onChangeActivePinOffer} = this.props;
    evt.preventDefault();
    onChangeActivePinOffer(this._offer);
  }

  handleFavoriteClick(evt) {
    evt.preventDefault();
    const {onChangeFavorite} = this.props;
    const status = (this._offer.isFavorite) ? 0 : 1;
    onChangeFavorite({
      id: this._offer.id,
      status
    });
  }

  render() {
    return <article className="cities__place-card place-card">
      {this._offer.isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={this._offer.image}
            width={260}
            height={200}
            alt="Place image"
            onClick={this.handleImgClick}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{this._offer.price}</b>
            <span className="place-card__price-text">
                      /&nbsp;night
            </span>
          </div>
          <button
            className={this._offer.isFavorite ? `place-card__bookmark-button  place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
            type="button" onClick={this.handleFavoriteClick}
            ref={this.favoriteRef}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">
                      In bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: this._offer.rating * 10 + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${this._offer.id}`} href="#" onClick={this.handleTitleClick}>{this._offer.name}</Link>
        </h2>
        <p className="place-card__type">{this._offer.type}</p>
      </div>
    </article>;
  }
}

OfferCard.propTypes = {
  offer: offerPropTypes,
  onChangeActivePinOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  onChangeActiveOffer: PropTypes.func
};
