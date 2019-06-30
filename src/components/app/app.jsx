import PropTypes from "prop-types";
import {PureComponent} from "react";

import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";
import {reviewPropTypes} from "../../prop-types/review-prop-type";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    props.onIsAuthorized();
    this.props.onLoadOffers();
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
  onLoadOffers: PropTypes.func,
  onIsAuthorized: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  onAuthorize: PropTypes.func,
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
  onSendReview: PropTypes.func,
  onChangeActiveOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  onChangeSort: PropTypes.func,
  onChangeActivePinOffer: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  onFetchFavorite: PropTypes.func
};

