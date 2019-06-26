import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

export class FavoriteCard extends PureComponent {
  constructor(props) {
    super(props);

    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.favoriteClickHandler = this.favoriteClickHandler.bind(this);
  }

  titleClickHandler() {
    const {titleOnClick, fetchReviews, offer} = this.props;
    titleOnClick(offer);
    fetchReviews(offer.id);
  }

  favoriteClickHandler(evt) {
    evt.preventDefault();
    const {changeFavorite} = this.props;
    const status = (this._offer.isFavorite) ? 0 : 1;
    changeFavorite({
      id: this._offer.id,
      status
    });
  }

  favoriteClickHandler(evt) {
    evt.preventDefault();
    const {changeFavorite, offer} = this.props;
    changeFavorite({
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
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={this.favoriteClickHandler}>
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
          <Link to={`/offer/${offer.id}`} href="#" onClick={this.titleClickHandler}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>;
  }
}
