import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

import {OffersList} from "../offers-list/offers-list";
import {OffersMap} from "../offers-map/offers-map";
import {WithLeafletMap} from "../with-leaflet-map/with-leaflet-map";
import {CitiesList} from "../cities-list/cities-list";
import {offersPropTypes} from "../../prop-types/offers-prop-types";
import {WithActiveItem} from "../../hocs/with-active-item";
import {Sort} from "../sort/sort";


export const MainScreen = (props) => {
  const {offers, cityName, cityClickHandler, cities, isLoading, error, user,
    isAuthorizationRequired, changeActiveOffer, changeSort, sort, changeActivePinOffer, activePinOffer} = props;
  const userElementSwitch = () => {
    return isAuthorizationRequired && user ?
      <Link
        className="header__nav-link header__nav-link--profile"
        to={`/favorites`}> <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={`https://es31-server.appspot.com/six-cities${user.avatar}`}/>
          <span className="header__user-name user__name">{user.email}</span>
        </div>
      </Link>
      :
      <Link className="header__nav-link header__nav-link--profile" to={`/login`}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>;
  };
  const OffersListWithActiveItem = <WithActiveItem
    render={(childProps) => <OffersList {...childProps} offers={offers} changeActiveOffer={changeActiveOffer} sort={sort} changeActivePinOffer={changeActivePinOffer}/>}
  />;

  return <React.Fragment>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-arrow-select" viewBox="0 0 7 4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
          />
        </symbol>
        <symbol id="icon-bookmark" viewBox="0 0 17 18">
          <path
            d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
        </symbol>
        <symbol id="icon-star" viewBox="0 0 13 12">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
          />
        </symbol>
      </svg>
    </div>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {userElementSwitch()}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList
        cities={cities}
        cityClickHandler={cityClickHandler}
        cityName={cityName}
      />
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in {cityName}
            </b>
            <Sort
              changeSort={changeSort}
              sort={sort}
            />

            <div className="cities__places-list places__list tabs__content" style={{overflow: `auto`, height: `calc(100vh - 350px)`}}>
              {isLoading && <h3>Offers is loading</h3>}
              {error && <h3>Download failed {error.message}</h3>}
              {OffersListWithActiveItem}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" style={{backgroundImage: `none`, height: `calc(100vh - 200px)`}}>
              <WithLeafletMap
                render={(data) => <OffersMap mapMethods={data} offers={offers} cityName={cityName} activePinOffer={activePinOffer}/>}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </React.Fragment>;
};

MainScreen.propTypes = {
  offers: offersPropTypes,
  cityName: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
  signOut: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  changeActiveOffer: PropTypes.func,
  changeSort: PropTypes.func,
  sort: PropTypes.string,
  changeActivePinOffer: PropTypes.func,
  activePinOffer: PropTypes.object
};
