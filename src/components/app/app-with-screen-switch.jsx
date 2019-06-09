import {WithScreenSwitch} from "../../hocs/with-screen-switch";
import {OffersList} from "../offers-list/offers-list";
import React from "react";
import {App} from "./app";

export const AppWithScreenSwitch = <WithScreenSwitch render={(screenSwitch) =>{
  return <App {...screenSwitch} />;
}}/>;
