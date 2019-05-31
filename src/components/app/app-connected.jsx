import {createSelector} from 'reselect';

import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";

const mapStateToProps = (state) => {
  const offers = state.offers.filter((offer) => offer.city === state.cityName);
  const getOffers = () => state.offers;
  const getCities = createSelector(getOffers,
      (offersItems) => {
        return [...new Set(offersItems.map((offer) => offer.city))];
      });


  return {
    cityName: state.cityName,
    offers,
    cities: getCities()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveCity(changedCity));
    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
