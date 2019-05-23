import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {City} from "../city/city";

export class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {cities, cityClickHandler, activeCity} = this.props;
    console.log(cities);

    return <ul className="locations__list tabs__list">
      {cities.map((cityItem, i) => {

        return <City
          key={`city-` + i}
          city = {cityItem}
          isActive = {cityItem === activeCity}
          cityClickHandler = {cityClickHandler}
        />;
      })
      }
    </ul>;
  }
}

