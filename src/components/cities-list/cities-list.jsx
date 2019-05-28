import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {City} from "../city/city";

export class CitiesList extends PureComponent {
  render() {
    const {cities, cityClickHandler, cityName} = this.props;
    return <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem, i) => {
            return <City
              key={`city-${i}`}
              city={cityItem}
              isActive={cityItem === cityName}
              cityClickHandler={cityClickHandler}
            />;
          })
          }
        </ul>
      </section>
    </div>;
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  cityClickHandler: PropTypes.func,
  cityName: PropTypes.string
};

