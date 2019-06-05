import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";
import {
  getActiveOffers,
  getCities,
  getCityName, getIsAuthorizationRequired,
  getOffersIsLoading,
  getOffersLoadError, getUser,
} from "../../reducer/selectors";
import {Operation} from "../../operation";

const mapStateToProps = (state) => {
  return {
    cityName: getCityName(state),
    offers: getActiveOffers(state),
    cities: getCities(state),
    isLoading: getOffersIsLoading(state),
    error: getOffersLoadError(state),
    isAuthorizationRequired: getIsAuthorizationRequired(state),
    user: getUser(state)
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
    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
