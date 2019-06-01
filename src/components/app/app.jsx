import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

export const App = (props) => {
  const {cities, offers, cityName, cityClickHandler, isLoading, error} = props;

  return <MainScreen
    offers={offers}
    cities={cities}
    cityName={cityName}
    isLoading={isLoading}
    error={error}
    cityClickHandler={cityClickHandler}
  />;
};

App.propTypes = {
  offers: offersPropTypes,
  cityName: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

