import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";
import {
  getCities,
  getCityName,
  getOffers,
  getOffersIsLoading,
  getOffersLoadError,
} from "../../reducer/selectors";
import {Operation} from "../../operation";

const mapStateToProps = (state) => {

  const offers = getOffers(state).filter((offer) => offer.city === getCityName(state));

  return {
    cityName: getCityName(state),
    offers,
    cities: getCities(state),
    isLoading: getOffersIsLoading(state),
    error: getOffersLoadError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(Operation.loadOffers());
  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveCity(changedCity));
    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
