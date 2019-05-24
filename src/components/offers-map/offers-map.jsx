import PropTypes from "prop-types";
import React, {PureComponent} from "react";

const CitiesCoordinates = {
  Paris: [48.85341, 2.3488],
  Brussels: [50.85045, 4.34878],
  Amsterdam: [52.38333, 4.9],
  Hamburg: [53.57532, 10.01534],
  Dusseldorf: [51.2217, 6.77616]
};

export class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: 823}} data-id={this.props.activeCity}></div>;
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
    const {offers, activeCity} = this.props;
    const city = CitiesCoordinates[activeCity];
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
    const iconUrl = `img/pin-map.svg`;
    const iconSize = [30, 30];
    const mapItem = this.mapItem;
    this.pins = offers.map((offfer) => this.props.mapMethods.addPin({
      coordinates: offfer.coordinates,
      mapItem,
      iconUrl,
      iconSize
    }));
  }

  componentDidUpdate() {
    const {offers, activeCity} = this.props;
    const city = CitiesCoordinates[activeCity];
    this.mapItem.setView(city);
    this.pins.forEach((pin) => {
      pin.remove();
    });
    this.renderPins(offers);
  }
}

OffersMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number)
  })).isRequired,
  mapMethods: PropTypes.shape({
    createMap: PropTypes.func,
    addPin: PropTypes.func
  }).isRequired,
  activeCity: PropTypes.string.isRequired
};
