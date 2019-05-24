import connect from "react-redux/es/connect/connect";
import {App} from "./app";
import {ActionCreator} from "../../reducer";

const mapStateToProps = (state, ownProps) => {
  return Object.assign({},
      ownProps, {
        activeCity: state.activeCity,
        offers: state.activeOffers,
        allOffers: state.offers
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
