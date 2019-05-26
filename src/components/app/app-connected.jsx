import connect from "react-redux/es/connect/connect";

import {ActionCreator} from "../../action-creator";
import {App} from "./app";

const mapStateToProps = (state, ownProps) => {
  const cities = [...new Set(state.offers.map((offer) => offer.city))];
  const offers = state.offers.filter((offer) => offer.city === state.cityName);

  return Object.assign({},
      ownProps, {
        cityName: state.cityName,
        offers,
        cities
      });
};

const mapDispatchToProps = (dispatch) => {

  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveCity(changedCity));
    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
