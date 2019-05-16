import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {offers} from "./mocks/offers";

const titleClickHandler = () => {
};

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        titleClickHandler={titleClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
