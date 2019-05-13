import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {offers, titleClickHandler} = props;

  return <MainScreen
    offers={offers}
    titleClickHandler={titleClickHandler}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  titleClickHandler: PropTypes.func.isRequired
};
