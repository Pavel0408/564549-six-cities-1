import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {cardTitles, titleClickHandler} = props;

  return <MainScreen
    cardTitles={cardTitles}
    titleClickHandler={titleClickHandler}
  />;
};

App.propTypes = {
  cardTitles: PropTypes.array.isRequired,
  titleClickHandler: PropTypes.func.isRequired
};
