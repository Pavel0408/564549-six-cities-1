import React, {PureComponent} from "react";
import {offerCardPropTypes} from "../../prop-types/offer-card-prop-types";
import {Link, Redirect} from "react-router-dom";

export class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    const {offer, changeActivePinOffer, titleOnClick} = props;
    this._offer = offer;
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.imgClickHandler = this.imgClickHandler.bind(this);
    this.changeActivePinOffer = changeActivePinOffer;
    this.titleOnClick = titleOnClick;
    this.favoriteClickHandler = this.favoriteClickHandler.bind(this);
    this.favoriteRef = React.createRef();
  }

  titleClickHandler() {
    this.titleOnClick(this._offer);
    this.changeActivePinOffer(this._offer);
    this.props.fetchReviews(this._offer.id);
  }

  imgClickHandler(evt) {
    evt.preventDefault();
    this.changeActivePinOffer(this._offer);
  }

  favoriteClickHandler(evt) {
    evt.preventDefault();
    const {changeFavorite} = this.props;
    const status = (this._offer.isFavorite) ? 0 : 1;
    changeFavorite({
      id: this._offer.id,
      status
    });

    return <Redirect to="/login" />;

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
            onClick={this.imgClickHandler}
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
            type="button" onClick={this.favoriteClickHandler}
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
          <Link to={`/offer/${this._offer.id}`} href="#" onClick={this.titleClickHandler}>{this._offer.name}</Link>
        </h2>
        <p className="place-card__type">Private room</p>
      </div>
    </article>;
  }
}

OfferCard.propTypes = offerCardPropTypes;
