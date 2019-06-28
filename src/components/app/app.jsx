import PropTypes from "prop-types";
import {PureComponent} from "react";

import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";
import {reviewPropTypes} from "../../prop-types/review-prop-type";

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
  offers: PropTypes.arrayOf(offerPropTypes),
  cityName: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  loadOffers: PropTypes.func,
  isAuthorized: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  authorize: PropTypes.func,
  user: userPropTypes,
  signOut: PropTypes.func,
  screenSwitch: PropTypes.func,
  activeOffer: offerPropTypes,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  reviewsError: PropTypes.object,
  sort: PropTypes.string,
  activePinOffer: offerPropTypes,
  sendingError: PropTypes.object,
  isSending: PropTypes.bool,
  favoriteIsLoading: PropTypes.bool,
  favoriteLoadingError: PropTypes.object,
  favoriteOffers: PropTypes.arrayOf(offerPropTypes),
  sendReview: PropTypes.func,
  changeActiveOffer: PropTypes.func,
  fetchReviews: PropTypes.func,
  changeSort: PropTypes.func,
  changeActivePinOffer: PropTypes.func,
  changeFavorite: PropTypes.func,
  fetchFavorite: PropTypes.func
};

