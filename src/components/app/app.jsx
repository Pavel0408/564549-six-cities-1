import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";
import connect from "react-redux/es/connect/connect";

export const App = (props) => {
  const {offers} = props;

  return <MainScreen
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({},
    ownProps);

export const AppConnected = connect(mapStateToProps)(App);
