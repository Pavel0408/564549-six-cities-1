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
import {withScreenSwitch, WithScreenSwitch} from "../../hocs/with-screen-switch";
import React from "react";
import {OffersList} from "../offers-list/offers-list";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainScreen} from "../main-screen/main-screen";
import {SignIn} from "../sign-in/sign-in";
import {Favorite} from "../favorite/favorite";

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
    },
    signOut: (evt) => {
      evt.preventDefault();
      dispatch(ActionCreator.authorizationFailed());
    }
  };
};

const screenSwitch = (props) => {

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => {
        return <MainScreen
          {...props}
        />;
      }
      }/>
      <Route path="/login" exact render={() => {
        return <SignIn
          {...props}
        />;
      }}
      />
      <Route path="/favorites" exact render={() => {
        return <Favorite/>;
      }
      }/>
    </Switch>
  </BrowserRouter>;

};

export const AppWithScreenSwitch = withScreenSwitch({
  Component: App,
  screenSwitch
});
console.log(<AppWithScreenSwitch/>);
export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(AppWithScreenSwitch);
console.log(3);
