import {ActionCreator} from "./action-creator";
import {parseServerResponseOffers} from "./parse-server-response/parse-server-response-offers";
import {ServerPath} from "./constants/server-path";

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadingOffers());
    return api.get(ServerPath.hotels)
      .then(parseServerResponseOffers)
      .then((offers) => {
        dispatch(ActionCreator.fetchOffersReceived(offers));
      }).catch((e) => {
        dispatch(ActionCreator.fetchOffersFailed(e));
      });
  },
};

