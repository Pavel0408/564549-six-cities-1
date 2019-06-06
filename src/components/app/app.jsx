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
      const {authorize} = this.props;
      return <SignIn authorize={authorize}/>;
    }
    const {cities, offers, cityName, cityClickHandler, isLoading, error, user, signOut} = this.props;

    return <MainScreen
      offers={offers}
      cities={cities}
      cityName={cityName}
      isLoading={isLoading}
      error={error}
      cityClickHandler={cityClickHandler}
      user={user}
      signOut={signOut}
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
  isAuthorized: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  authorize: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.func
};

