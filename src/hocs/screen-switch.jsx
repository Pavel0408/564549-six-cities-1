import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {MainScreen} from "../components/main-screen/main-screen";
import {SignIn} from "../components/sign-in/sign-in";
import {Favorite} from "../components/favorite/favorite";
import React from "react";
import PropTypes from "prop-types";
import {OfferDetails} from "../components/offer-details/offer-details";

export const ScreenSwitch = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => {
        if (props.isAuthorizationRequired) {
          return <SignIn
            {...props}
          />;
        }
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

      <Route path="/offer/:id" render={() => {
        if (props.activeOffer) {
          return <OfferDetails {...props}/>;
        }
        return <Redirect to="/" />;
      }}
      />

      <Route path="/favorites" exact render={() => {
        console.log(props.user);
        if (props.user && props.user.avatar) {
          console.log(props.user.name);
          return <Favorite/>;
        } else {
          return <SignIn
            {...props}
          />;
        }
      }}
      />
    </Switch>
  </BrowserRouter>;
};

ScreenSwitch.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  activeOffer: PropTypes.object
};
