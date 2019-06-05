import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {MainScreen} from "../main-screen/main-screen";
import {offersPropTypes} from "../../prop-types/offers-prop-types";
import {SignIn} from "../sign-in/sign-in";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    props.isAuthorized();
  }

  render() {
    if (!this.props.isAuthorizationRequired) {
      return <SignIn/>;
    }
    const {cities, offers, cityName, cityClickHandler, isLoading, error} = this.props;

    return <MainScreen
      offers={offers}
      cities={cities}
      cityName={cityName}
      isLoading={isLoading}
      error={error}
      cityClickHandler={cityClickHandler}
    />;
  }

  componentDidMount() {
    this.props.loadOffers();
  }
}

App.propTypes = {
  offers: offersPropTypes,
  cityName: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  loadOffers: PropTypes.func,
  isAuthorized: PropTypes.func
};

