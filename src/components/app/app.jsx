import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {offers} = props;

  return <MainScreen
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};
