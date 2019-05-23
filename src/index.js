import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {offers} from "./mocks/offers";
import {reducer} from "./reducer";

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
      />,
      document.querySelector(`#root`)
  );
};

init();
reducer(undefined, {
  type: `CHANGE_CITY`,
  payload: `Paris`
});
