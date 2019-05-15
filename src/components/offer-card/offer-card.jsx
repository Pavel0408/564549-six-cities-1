import PropTypes from "prop-types";
import React from "react";

export const OfferCard = (props) => {
  const {offer, titleOnClick, imgOnHover} = props;
  const imgHoverHandler = () => {
    imgOnHover(offer);
  };

  const titleClickHandler = (evt) => {
    evt.preventDefault();
    titleOnClick(offer);
  };

  return <article className="cities__place-card place-card">
    {offer.isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={offer.image}
          width={260}
          height={200}
          alt="Place image"
          onMouseOver={imgHoverHandler}
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">
                      /&nbsp;night
          </span>
        </div>
        <button
          className={offer.isFavorite ? `place-card__bookmark-button  place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width={18}
            height={19}
          >
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">
                      In bookmarks
          </span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * 10 + `%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={titleClickHandler}>{offer.name}</a>
      </h2>
      <p className="place-card__type">Private room</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired}).isRequired,

  titleClickHandler: PropTypes.func.isRequired,
  imgHoverHandler: PropTypes.func.isRequired
};
