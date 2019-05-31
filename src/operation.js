import {ActionCreator} from "./action-creator";
import {OfferModel} from "./models/offer-model";

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then(OfferModel.parseServerData)
      .then((offers) => {
        dispatch(ActionCreator.changeActiveOffers(offers));
      });
  },
}
