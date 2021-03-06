import PropTypes from "prop-types";
import React from "react";

import {SortWithActiveItem} from "../sort/sort";
import {OffersList} from "../offers-list/offers-list";
import {WithLeafletMap} from "../../hocs/with-leaflet-map";
import {OffersMap} from "../offers-map/offers-map";
import {offerPropTypes} from "../../prop-types/offer-prop-types";

export const CitiesPlaces = (props) => {
  const {offers, cityName, onChangeSort, sort, isLoading, error, onChangeActiveOffer, onChangeActivePinOffer, onFetchReviews, activePinOffer, onChangeFavorite} = props;
  return <React.Fragment>
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {cityName}
        </b>
        <SortWithActiveItem
          onChangeSort={onChangeSort}
          sort={sort}
        />
        <div className="cities__places-list places__list tabs__content" style={{overflow: `auto`, height: `calc(100vh - 350px)`}}>
          {isLoading && <h3>Offers is loading</h3>}
          {error && <h3>Download failed {error.message}</h3>}
          <OffersList offers={offers}
            onChangeActiveOffer={onChangeActiveOffer}
            sort={sort}
            onChangeActivePinOffer={onChangeActivePinOffer}
            onFetchReviews={onFetchReviews}
            onChangeFavorite={onChangeFavorite}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" style={{backgroundImage: `none`, height: `calc(100vh - 200px)`}}>
          <WithLeafletMap
            render={(data) => <OffersMap mapMethods={data} offers={offers} cityName={cityName} activePinOffer={activePinOffer}/>}/>
        </section>
      </div>
    </div>
  </React.Fragment>;
};

CitiesPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  cityName: PropTypes.string,
  onChangeSort: PropTypes.func,
  sort: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onChangeActiveOffer: PropTypes.func,
  onChangeActivePinOffer: PropTypes.func,
  onFetchReviews: PropTypes.func,
  activePinOffer: offerPropTypes,
  onChangeFavorite: PropTypes.func
};
