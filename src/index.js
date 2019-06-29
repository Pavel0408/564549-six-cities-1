import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

import {AppConnected} from "./components/app/app-connected";
import {reducer} from "./reducer/reducer";
import {createAPI} from "./api";
import {BrowserRouter} from "react-router-dom";


const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <AppConnected/>
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
