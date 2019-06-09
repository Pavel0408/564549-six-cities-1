import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainScreen} from "../components/main-screen/main-screen";
import {SignIn} from "../components/sign-in/sign-in";
import {Favorite} from "../components/favorite/favorite";
import React from "react";

export const screenSwitch = (props) => {

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
