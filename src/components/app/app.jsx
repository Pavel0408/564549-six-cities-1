import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {allOffers, offers, activeCity, cityClickHandler} = props;
  const cities = [...new Set(allOffers.map((offer) => offer.city))];

  return <MainScreen
    offers={offers}
    cities={cities}
    activeCity={activeCity}
    cityClickHandler={cityClickHandler}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  allOffers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired
};

