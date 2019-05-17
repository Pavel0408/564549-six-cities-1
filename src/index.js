import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {offers} from "./mocks/offers";
import {mapService} from "./services/map-service";

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        mapService={mapService}
      />,
      document.querySelector(`#root`)
  );
};

init();
