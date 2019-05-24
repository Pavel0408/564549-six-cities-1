import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import {AppConnected} from "./components/app/app-connected";
import {offers} from "./mocks/offers";
import {reducer} from "./reducer";

/* eslint-disable no-underscore-dangle */
const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
  ReactDOM.render(<Provider store={store}>
    <AppConnected
      offers={offers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};


init();
reducer(undefined, {
  type: `CHANGE_CITY`,
  payload: `Paris`
});
