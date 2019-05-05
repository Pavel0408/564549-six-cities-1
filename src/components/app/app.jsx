import React from "react";

import {MainScreen} from "../main-screen/main-screen";

export const App = (props) => {
  const {cardTitles} = props;
  console.log(cardTitles);

  return <MainScreen cardTitles={cardTitles} />;
};
