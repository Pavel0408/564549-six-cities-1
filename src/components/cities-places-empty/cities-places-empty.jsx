import PropTypes from "prop-types";
import React from "react";

export const CitiesPlacesEmpty = (props) => {
  const {isLoading, error, cityName} = props;
  return <React.Fragment>
    <div className="cities__places-container cities__places-container--empty container">
      {isLoading && <h3>Offers is loading</h3>}
      {error && <h3>Download failed {error.message}</h3>}
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {cityName}</p>
        </div>
      </section>
      <div className="cities__right-section">
      </div>
    </div>
  </React.Fragment>;
};

CitiesPlacesEmpty.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  cityName: PropTypes.string
};
