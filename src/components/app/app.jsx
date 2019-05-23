import PropTypes from "prop-types";
import React from "react";

import {MainScreen} from "../main-screen/main-screen";
import connect from "react-redux/es/connect/connect";
import {ActionCreator} from "../../reducer";

export const App = (props) => {
  const {allOffers, offers, activeCity, cityClickHandler} = props;
  const cities = [...new Set(allOffers.map((offer) => offer.city))];
  console.log(offers, `---`, activeCity);
  return <MainScreen
    offers={offers}
    cities={cities}
    activeCity={activeCity}
    cityClickHandler={cityClickHandler}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({},
      ownProps, {
        activeCity: state.activeCity,
        offers: state.activeOffers,
        allOffers: state.offers
      });
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    cityClickHandler: (changedCity) => {
      dispatch(ActionCreator.changeActiveOffers(changedCity));
      dispatch(ActionCreator.changeActiveCity(changedCity));

    }
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
