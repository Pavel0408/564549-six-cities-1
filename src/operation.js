import {ActionCreator} from "./action-creator";
import {OfferModel} from "./models/offer-model";

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.fetchOffers());
    return api.get(`/hotels`)
      .then(OfferModel.parseServerData)
      .then((offers) => {
        dispatch(ActionCreator.fetchOffersReceived());
        dispatch(ActionCreator.changeActiveOffers(offers));
      }).catch((e) => {
        ActionCreator.fetchOffersFailed(e);
      });
  },
};

