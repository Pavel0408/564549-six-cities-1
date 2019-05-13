import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {offers} from "./mocks/offers";

const cardTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

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
