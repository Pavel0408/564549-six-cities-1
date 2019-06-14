import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {CityLocation} from "../../constants/city-location";
import {offersPropTypes} from "../../prop-types/offers-prop-types";

export class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{backgroundImage: `none`, height: `100%`}}></div>;
  }

  componentDidMount() {
    if (!document.querySelector(`#map`)) {
      return;
    }
    const {offers} = this.props;
    this.renderMap();
    this.renderPins(offers);
  }

  renderMap() {
    const {offers, cityName} = this.props;
    const city = CityLocation[cityName];
    const zoom = 12;
    const mapConfig = {
      offers,
      city,
      zoom,
      settings: {
        id: `map`,
        options: {
          center: city,
          zoom,
          zoomControl: false,
          marker: true
        }
      }
    };

    this.mapItem = this.props.mapMethods.createMap(mapConfig);
  }

  renderPins(offers) {
    const iconUrl = `/img/pin-map.svg`;
    const iconSize = [30, 30];
    const mapItem = this.mapItem;

    this.pins = offers.map((offer) =>{
      return this.props.mapMethods.addPin({
        coordinates: offer.coordinates,
        mapItem,
        iconUrl,
        iconSize
      });
    });
  }

  componentDidUpdate() {
    const {offers, cityName} = this.props;
    const city = CityLocation[cityName];
    this.mapItem.setView(city);
    this.pins.forEach((pin) => {
      pin.remove();
    });
    this.renderPins(offers);
  }
}

OffersMap.propTypes = {
  offers: offersPropTypes,
  mapMethods: PropTypes.shape({
    createMap: PropTypes.func,
    addPin: PropTypes.func
  }).isRequired,
  cityName: PropTypes.string.isRequired
};
