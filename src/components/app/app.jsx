import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {cardTitles} = props;

  return <MainScreen cardTitles={cardTitles} />;
};

App.propTypes = {
  cardTitles: PropTypes.array.isRequired
};
