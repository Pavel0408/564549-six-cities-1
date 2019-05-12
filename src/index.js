import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";

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
        cardTitles={cardTitles}
        titleClickHandler={titleClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
