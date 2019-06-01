import {createSelector} from 'reselect';

import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";
import {getCityName, getOffers} from "../../reducer/selectors";

const mapStateToProps = (state) => {

  const offers = getOffers(state).filter((offer) => offer.city === getCityName(state));
  const getOffersItems = () => getOffers(state);
  const getCities = createSelector(getOffersItems,
      (offersItems) => {
        return [...new Set(offersItems.map((offer) => offer.city))];
      });


  return {
    cityName: getCityName(state),
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
