import PropTypes from "prop-types";
import {PureComponent} from "react";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    props.isAuthorized();
    this.props.loadOffers();
  }

  render() {
    return this.props.screenSwitch(this.props);
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
  signOut: PropTypes.func,
  screenSwitch: PropTypes.func
};

