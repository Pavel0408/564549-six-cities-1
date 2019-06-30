import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

export class FavoriteCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleTitleClick() {
    const {onChangeActiveOffer, onFetchReviews, offer} = this.props;
    onChangeActiveOffer(offer);
    onFetchReviews(offer.id);
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

  handleFavoriteClick(evt) {
    evt.preventDefault();
    const {onChangeFavorite, offer} = this.props;
    onChangeFavorite({
      id: offer.id,
      status: 0
    });
  }

  render() {
    const {offer} = this.props;
    return <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.image} width={150} height={110} alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={this.handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * 10 + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} href="#" onClick={this.handleTitleClick}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>;
  }
}

FavoriteCard.propTypes = {
  onChangeActiveOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  offer: offerPropTypes,
  onChangeFavorite: PropTypes.func
};
