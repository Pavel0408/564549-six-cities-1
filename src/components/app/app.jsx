import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {cities, offers, activeCity, cityClickHandler} = props;

  return <MainScreen
    offers={offers}
    cities={cities}
    activeCity={activeCity}
    cityClickHandler={cityClickHandler}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string)
};

