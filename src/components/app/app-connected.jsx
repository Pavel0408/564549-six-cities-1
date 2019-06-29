import connect from "react-redux/es/connect/connect";

import {changeActiveCity, changeActivePinOffer, changeSort, setActiveOffer} from "../../action-creator";
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
    favoriteOffers: getFavoriteOffers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCityClick: (changedCity) => {
      dispatch(changeActiveCity(changedCity));
    },
    loadOffers: () => {
      dispatch(loadOffers());
    },
    isAuthorized: () => {
      dispatch(isAuthorized());
    },
    authorize: (evt) => {
      evt.preventDefault();
      const authorizationFormData = new FormData(evt.target);
      const email = authorizationFormData.get(`email`);
      const password = authorizationFormData.get(`password`);
      dispatch(authorize({
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
      dispatch(sendReviews({
        id,
        rating,
        comment
      }));
    },
    changeActiveOffer: (offer) => {
      dispatch(setActiveOffer(offer));
    },
    fetchReviews: (id) => {
      dispatch(fetchReviews(id));
    },
    changeSort: (sort) => {
      dispatch(changeSort(sort));
    },
    changeActivePinOffer: (offer) => {
      dispatch(changeActivePinOffer(offer));
    },
    changeFavorite: (favoriteItem) => {
      dispatch(changeFavorite(favoriteItem))
        .then(dispatch(updateOffers())
          .then(dispatch(getFavorite())));
    },
    fetchFavorite: () => {
      dispatch(getFavorite());
    }
  };
};

const AppWithScreenSwitch = withScreenSwitch({
  Component: App,
  ScreenSwitch
});

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(AppWithScreenSwitch);

