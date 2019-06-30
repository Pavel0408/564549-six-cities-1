import {Link} from "react-router-dom";
import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

import {FavoriteCity} from "../favorite-city/favorite-city";
import {UserElementSwitch} from "../../hocs/user-element-switch";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";

export class Favorite extends PureComponent {
  constructor(props) {
    super(props);

    props.onFetchFavorite();
  }

  render() {
    const {favoriteOffers, onCityClick, onChangeActiveOffer, onFetchReviews, onChangeFavorite, user} = this.props;
    const favoriteCityNames = [...new Set(favoriteOffers.map((offer) => offer.city))];

    return <Fragment>
      <div>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path
                d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
            </symbol>
          </svg>
        </div>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link" href="#">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/>
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
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCityNames.map((favoriteCityName, i) => {
                  const offers = favoriteOffers.filter((offer) => {
                    return offer.city === favoriteCityName;
                  });
                  return <FavoriteCity
                    favoriteCityName={favoriteCityName}
                    favoriteOffers={offers}
                    key={`${favoriteCityName}${i}`}
                    onCityClick={onCityClick}
                    onChangeActiveOffer={onChangeActiveOffer}
                    onFetchReviews={onFetchReviews}
                    onChangeFavorite={onChangeFavorite}
                  />;
                })
                }
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to="/" className="footer__logo-link" href="#">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33}/>
          </Link>
        </footer>
      </div>
    </Fragment>;
  }
}

Favorite.propTypes = {
  onFetchFavorite: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerPropTypes),
  onCityClick: PropTypes.func,
  onChangeActiveOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  user: userPropTypes
};

