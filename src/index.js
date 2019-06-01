import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {compose} from "recompose";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {AppConnected} from "./components/app/app-connected";
import {offers} from "./mocks/offers";
import {reducer} from "./reducer/reducer";
import {createAPI} from "./api";
import {Operation} from "./operation";

/* eslint-disable no-underscore-dangle */
const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */
  store.dispatch(Operation.loadOffers());

  ReactDOM.render(<Provider store={store}>
    <AppConnected
      offers={offers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
