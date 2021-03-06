import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {ReviewsList} from "../reviews-list/reviews-list";
import {OffersList} from "../offers-list/offers-list";
import {WithLeafletMap} from "../../hocs/with-leaflet-map";
import {OffersMap} from "../offers-map/offers-map";
import {UserElementSwitch} from "../../hocs/user-element-switch";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";
import {WithActiveItem} from "../../hocs/with-active-item";

export class OfferDetails extends PureComponent {
  constructor(props) {
    super(props);

    props.onFetchReviews(props.activeOffer.id);
    props.onChangeBookmarkIsActive(props.activeOffer.isFavorite);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleFavoriteClick(evt) {
    evt.preventDefault();
    const {onChangeFavorite, onChangeBookmarkIsActive, bookmarkIsActive} = this.props;
    const status = (this.props.activeOffer.isFavorite) ? 0 : 1;
    onChangeFavorite({
      id: this.props.activeOffer.id,
      status
    });

    onChangeBookmarkIsActive(!bookmarkIsActive);
  }

  render() {
    const offer = this.props.activeOffer;
    const offers = this.props.nearestOffers;
    const {user, bookmarkIsActive, offersOnMap} = this.props;

    return <React.Fragment>
      <div>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <UserElementSwitch
                      user={user}
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">

              <div className="property__gallery">
                {offer.allImages.slice(0, 6).map((image, i) =>{
                  return <div key={i.toString() + offer.id} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>;
                })
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.name}
                  </h1>
                  <button className={offer.isFavorite ? `property__bookmark-button  property__bookmark-button--active button` : `property__bookmark-button button`} type="button" onClick={this.handleFavoriteClick}>
                    <svg className="property__bookmark-icon" width={31} style={bookmarkIsActive ? {fill: `#4481c3`, stroke: `#4481c3`} : {}} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating * 10}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating / 2}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    Entire place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{this.props.activeOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((item, i)=>{
                      return <li key={i.toString() + offer.id} className="property__inside-item">
                        {item}
                      </li>;
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`/${offer.host.avatar}`} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    <span className="property__user-status">
                      {offer.host.isPro && `Pro`}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <ReviewsList {...this.props}
                />
              </div>
            </div>
            <section className="property__map map" style={{backgroundImage: `none`}}>
              <WithLeafletMap
                render={(data) => <OffersMap mapMethods={data} offers={offersOnMap} cityName={this.props.cityName} activePinOffer={this.props.activePinOffer}/>}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={offers}
                  onChangeActiveOffer={this.props.onChangeActiveOffer}
                  onChangeActivePinOffer={this.props.onChangeActivePinOffer}
                  onFetchReviews={this.props.onFetchReviews}
                  onChangeFavorite={this.props.onChangeFavorite}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>;
  }
}

OfferDetails.propTypes = {
  activeOffer: offerPropTypes,
  isAuthorizationRequired: PropTypes.bool,
  user: userPropTypes,
  cityName: PropTypes.string,
  onChangeActiveOffer: PropTypes.func,
  offers: PropTypes.arrayOf(offerPropTypes),
  onChangeActivePinOffer: PropTypes.func,
  activePinOffer: offerPropTypes,
  onFetchReviews: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  onChangeBookmarkIsActive: PropTypes.func,
  bookmarkIsActive: PropTypes.bool,
  nearestOffers: PropTypes.arrayOf(offerPropTypes),
  offersOnMap: PropTypes.arrayOf(offerPropTypes)
};

export const OfferDetailsWithActiveItem = (props) => {
  return <WithActiveItem render={(data) => {
    const {activeItem, onChange} = data;

    return <OfferDetails {...props}
      bookmarkIsActive={activeItem}
      onChangeBookmarkIsActive={onChange}
    />;
  }
  }
  />;
};

