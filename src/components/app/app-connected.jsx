import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";
import {
  getActiveOffer,
  getActiveOffers,
  getActivePinOffer,
  getCities,
  getCityName,
  getFavoriteIsLoading,
  getFavoriteLoadingError,
  getFavoriteOffers,
  getIsAuthorizationRequired,
  getIsSending,
  getOffersIsLoading,
  getOffersLoadError,
  getReviews,
  getReviewsError,
  getSendingError,
  getSort,
  getUser,
} from "../../reducer/selectors";
import {Operation} from "../../operation";
import {withScreenSwitch} from "../../hocs/with-screen-switch";
import {ScreenSwitch} from "../../hocs/screen-switch";
import {SortFunctions} from "../../sort-functions";

const mapStateToProps = (state) => {
  const sortFunction = SortFunctions[getSort(state)];

  return {
    cityName: getCityName(state),
    offers: getActiveOffers(state).sort(sortFunction),
    cities: getCities(state),
    isLoading: getOffersIsLoading(state),
    error: getOffersLoadError(state),
    isAuthorizationRequired: getIsAuthorizationRequired(state),
    user: getUser(state),
    activeOffer: getActiveOffer(state),
    reviews: getReviews(state),
    reviewsError: getReviewsError(state),
    sort: getSort(state),
    activePinOffer: getActivePinOffer(state),
    sendingError: getSendingError(state),
    isSending: getIsSending(state),
    favoriteIsLoading: getFavoriteIsLoading(state),
    favoriteLoadingError: getFavoriteLoadingError(state),
    favoriteOffers: getFavoriteOffers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveCity(changedCity));
    },
    loadOffers: () => {
      dispatch(Operation.loadOffers());
    },
    isAuthorized: () => {
      dispatch(Operation.isAuthorized());
    },
    authorize: (evt) => {
      evt.preventDefault();
      const authorizationFormData = new FormData(evt.target);
      const email = authorizationFormData.get(`email`);
      const password = authorizationFormData.get(`password`);
      dispatch(Operation.authorize({
        email,
        password
      }));
    },
    sendReview: (evt) => {
      evt.preventDefault();
      const sendReviewsFormData = new FormData(evt.target);
      const id = sendReviewsFormData.get(`activeOfferId`);
      const rating = sendReviewsFormData.get(`rating`);
      const comment = sendReviewsFormData.get(`review`);
      dispatch(Operation.sendReviews({
        id,
        rating,
        comment
      }));
    },
    signOut: (evt) => {
      evt.preventDefault();
      dispatch(ActionCreator.authorizationFailed());
    },
    changeActiveOffer: (offer) => {
      dispatch(ActionCreator.setActiveOffer(offer));
    },
    fetchReviews: (id) => {
      dispatch(Operation.fetchReviews(id));
    },
    changeSort: (sort) => {
      dispatch(ActionCreator.changeSort(sort));
    },
    changeActivePinOffer: (offer) => {
      dispatch(ActionCreator.changeActivePinOffer(offer));
    },
    changeFavorite: (favoriteItem) => {
      dispatch(Operation.changeFavorite(favoriteItem))
        .then(dispatch(Operation.updateOffers())
          .then(dispatch(Operation.getFavorite())));
    },
    fetchFavorite: () => {
      dispatch(Operation.getFavorite());
    }
  };
};

const AppWithScreenSwitch = withScreenSwitch({
  Component: App,
  ScreenSwitch
});

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(AppWithScreenSwitch);

