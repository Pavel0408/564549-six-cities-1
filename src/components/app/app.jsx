import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {offers, mapService} = props;

  return <MainScreen
    offers={offers}
    mapService={mapService}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  mapService: PropTypes.object.isRequired
};
