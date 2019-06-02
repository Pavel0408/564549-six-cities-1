import {ActionCreator} from "./action-creator";
import {OfferModel} from "./models/offer-model";
import {ServerPath} from "./constants/server-path";

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadingOffers(true));
    return api.get(ServerPath.hotels)
      .then(OfferModel.parseServerData)
      .then((offers) => {
        dispatch(ActionCreator.fetchOffersReceived(offers));
        dispatch(ActionCreator.loadingOffers(false));
        dispatch(ActionCreator.fetchOffersFailed(null));
      }).catch((e) => {
        dispatch(ActionCreator.fetchOffersFailed(e));
        dispatch(ActionCreator.loadingOffers(false));
      });
  },
};

