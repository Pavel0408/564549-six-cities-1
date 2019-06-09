import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainScreen} from "../components/main-screen/main-screen";
import {SignIn} from "../components/sign-in/sign-in";
import {Favorite} from "../components/favorite/favorite";
import PropTypes from "prop-types";

export const withScreenSwitch = ({Component, screenSwitch}) => {
  const WithScrieenSwitch = (props) => {
    return <Component {...props} screenSwitch={screenSwitch}/>;
  };

  return WithScrieenSwitch;
};


