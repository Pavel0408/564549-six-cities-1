import connect from "react-redux/es/connect/connect";
import {App} from "./app";
import {ActionCreator} from "../../reducer";

const mapStateToProps = (state, ownProps) => {
  const cities = [...new Set(state.offers.map((offer) => offer.city))];
  const offers = state.offers.filter((offer) => offer.city === state.activeCity);

  return Object.assign({},
      ownProps, {
        activeCity: state.activeCity,
        offers,
        cities
      });
};

const mapDispatchToProps = (dispatch) => {
  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveOffers(changedCity));
      dispatch(ActionCreator.changeActiveCity(changedCity));
    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
