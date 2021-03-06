import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

import {CitiesList} from "../cities-list/cities-list";
import {CitiesPlaces} from "../cities-places/cities-places";
import {CitiesPlacesEmpty} from "../cities-places-empty/cities-places-empty";
import {UserElementSwitch} from "../../hocs/user-element-switch";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";

export const MainScreen = (props) => {
  const {offers, cityName, onCityClick, cities, user
  } = props;

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
                <UserElementSwitch
                  user={user}
                />
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
        onCityClick={onCityClick}
        cityName={cityName}
      />
      <div className="cities__places-wrapper">
        {offers && offers.length > 0 ? <CitiesPlaces {...props}/> : <CitiesPlacesEmpty {...props}/>}
      </div>
    </main>
  </React.Fragment>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  cityName: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: userPropTypes,
  signOut: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool
};
