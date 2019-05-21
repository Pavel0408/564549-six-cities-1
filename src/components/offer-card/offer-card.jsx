import PropTypes from "prop-types";
import React, {PureComponent} from "react";

export class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    const {offer} = props;
    this._offer = offer;
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.imgHoverHandler = this.imgHoverHandler.bind(this);
  }

  titleClickHandler(evt) {
    const {titleOnClick} = this.props;
    evt.preventDefault();
    titleOnClick(this._offer);
  }

  imgHoverHandler() {
    const {imgOnHover} = this.props;
    imgOnHover(this._offer);
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
            onMouseOver={this.imgHoverHandler}
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
            type="button"
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
          <a href="#" onClick={this.titleClickHandler}>{this._offer.name}</a>
        </h2>
        <p className="place-card__type">Private room</p>
      </div>
    </article>;
  }
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  titleOnClick: PropTypes.func.isRequired,
  imgOnHover: PropTypes.func.isRequired
};
