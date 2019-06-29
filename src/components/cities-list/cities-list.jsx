import PropTypes from "prop-types";
import React from "react";
import {City} from "../city/city";

export const CitiesList = (props) => {
  const {cities, onCityClick, cityName} = props;
  return <div className="cities tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityItem, i) => {
          return <City
            key={`city-${i}`}
            city={cityItem}
            isActive={cityItem === cityName}
            onCityClick={onCityClick}
          />;
        })
        }
      </ul>
    </section>
  </div>;
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  onCityClick: PropTypes.func,
  cityName: PropTypes.string
};

