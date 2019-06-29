import {
  authorization, authorizationFailed,
  changeActiveCity, changeActivePinOffer, changeSort, fetchFavoriteFailed, fetchFavoriteReceived,
  fetchOffersFailed,
  fetchOffersReceived, fetchReviewsFailed, fetchReviewsSuccess, loadingFavorite,
  loadingOffers, sendingReviews, sendingReviewsError, setActiveOffer
} from "./action-creator";
import {ActionType} from "./action-type";

describe(`ActionCreator is correct`, () => {
  it(`Return correctly action on city changing`, () => {
    expect(changeActiveCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {
        cityName: `Brussels`
      }
    });
  });

  it(`Return correctly action on offers changing`, () => {
    const offers = [];
    expect(fetchOffersReceived(offers)).toEqual({
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        offers: []
      }
    });
  });
  it(`Return correctly action on favorite fetched`, () => {
    const offers = [];
    expect(fetchFavoriteReceived(offers)).toEqual({
      type: ActionType.FAVORITE_RECEIVED,
      payload: {
        favoriteOffers: []
      }
    });
  });
  it(`Return correctly action on fetchingOffers`, () => {
    expect(loadingOffers(true)).toEqual({
      type: ActionType.FETCH_OFFERS_LOADING
    });
  });
  it(`Return correctly action on fetching favorite Offers`, () => {
    expect(loadingFavorite()).toEqual({
      type: ActionType.FAVORITE_LOADING
    });
  });
  it(`Return correctly action on fetchOffersFailed`, () => {
    expect(fetchOffersFailed(`error`)).toEqual({
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error: `error`
      }
    });
  });
  it(`Return correctly action on fetch fetch favorite Offers Failed`, () => {
    expect(fetchFavoriteFailed(`error`)).toEqual({
      type: ActionType.FETCH_FAVORITE_FAILED,
      payload: {
        error: `error`
      }
    });
  });
  it(`Return correctly action on success authorization`, () => {
    expect(authorization(`user`)).toEqual({
      type: ActionType.AUTHORIZATION,
      payload: {
        user: `user`
      }
    });
  });
  it(`Return correctly action on authorization failed`, () => {
    expect(authorizationFailed(`error`)).toEqual({
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: null
      }
    });
  });
  it(`Return correctly action on active offer change`, () => {
    expect(setActiveOffer(`newOffer`)).toEqual({
      type: ActionType.ACTIVE_OFFER,
      payload: {
        activeOffer: `newOffer`
      }
    });
  });
  it(`Return correctly action on fetch Reviews Success`, () => {
    expect(fetchReviewsSuccess(`reviews`)).toEqual({
      type: ActionType.FETCH_REVIEWS_SUCCESS,
      payload: {
        reviews: `reviews`
      }
    });
  });
  it(`Return correctly action on fetch Reviews Failed`, () => {
    expect(fetchReviewsFailed(`error`)).toEqual({
      type: ActionType.FETCH_REVIEWS_FAILED,
      payload: {
        error: `error`
      }
    });
  });
  it(`Return correctly action on change sort`, () => {
    expect(changeSort(`newSort`)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: {
        sort: `newSort`
      }
    });
  });
  it(`Return correctly action on change active pin offer`, () => {
    expect(changeActivePinOffer(`newOffer`)).toEqual({
      type: ActionType.ACTIVE_PIN_OFFER_CHANGE,
      payload: {
        activePinOffer: `newOffer`
      }
    });
  });
  it(`Return correctly action on sending reviews `, () => {
    expect(sendingReviews()).toEqual({
      type: ActionType.SENDING_REVIEWS
    });
  });
  it(`Return correctly action on sending reviews error`, () => {
    expect(sendingReviewsError(`sendingError`)).toEqual({
      type: ActionType.SENDING_REVIEWS_ERROR,
      payload: {
        sendingError: `sendingError`
      }
    });
  });
});
