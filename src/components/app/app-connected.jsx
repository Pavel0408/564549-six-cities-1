import connect from "react-redux/es/connect/connect";

import {changeActiveCity, changeActivePinOffer, changeSort, setActiveOffer} from "../../action-creator";
import {App} from "./app";
import {
  getActiveOffer,
  getActiveOffers,
  getActivePinOffer,
  getCities,
  getCityName, getDateFormat, getFavoriteCityNames,
  getFavoriteIsLoading,
  getFavoriteLoadingError,
  getFavoriteOffers,
  getIsAuthorizationRequired,
  getIsSending, getNearestOffers,
  getOffersIsLoading,
  getOffersLoadError, getOffersOnMap,
  getReviews,
  getReviewsError,
  getSendingError,
  getSort,
  getUser,
} from "../../reducer/selectors";
import {withScreenSwitch} from "../../hocs/with-screen-switch";
import {ScreenSwitch} from "../../hocs/screen-switch";
import {SortFunctions} from "../../sort-functions";
import {
  authorize, changeFavorite,
  fetchReviews,
  getFavorite,
  isAuthorized,
  loadOffers,
  sendReviews,
  updateOffers
} from "../../operation";

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
    favoriteOffers: getFavoriteOffers(state),
    favoriteCityNames: getFavoriteCityNames(state),
    nearestOffers: getNearestOffers(state),
    offersOnMap: getOffersOnMap(state),
    dateFormat: getDateFormat()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCityClick: (changedCity) => {
      dispatch(changeActiveCity(changedCity));
    },
    onLoadOffers: () => {
      dispatch(loadOffers());
    },
    onIsAuthorized: () => {
      dispatch(isAuthorized());
    },
    onAuthorize: (evt) => {
      evt.preventDefault();
      const authorizationFormData = new FormData(evt.target);
      const email = authorizationFormData.get(`email`);
      const password = authorizationFormData.get(`password`);
      dispatch(authorize({
        email,
        password
      }));
    },
    onSendReview: (evt) => {
      evt.preventDefault();
      const sendReviewsFormData = new FormData(evt.target);
      const id = sendReviewsFormData.get(`activeOfferId`);
      const rating = sendReviewsFormData.get(`rating`);
      const comment = sendReviewsFormData.get(`review`);
      dispatch(sendReviews({
        id,
        rating,
        comment
      }));
    },
    onChangeActiveOffer: (offer) => {
      dispatch(setActiveOffer(offer));
    },
    onFetchReviews: (id) => {
      dispatch(fetchReviews(id));
    },
    onChangeSort: (sort) => {
      dispatch(changeSort(sort));
    },
    onChangeActivePinOffer: (offer) => {
      dispatch(changeActivePinOffer(offer));
    },
    onChangeFavorite: (favoriteItem) => {
      dispatch(changeFavorite(favoriteItem))
        .then(dispatch(updateOffers())
          .then(dispatch(getFavorite())));
    },
    onFetchFavorite: () => {
      dispatch(getFavorite());
    }
  };
};

const AppWithScreenSwitch = withScreenSwitch({
  Component: App,
  ScreenSwitch
});

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(AppWithScreenSwitch);

