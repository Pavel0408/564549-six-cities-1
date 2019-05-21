import PropTypes from "prop-types";
import React, {PureComponent} from "react";

export class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: 823}}></div>;
  }

  componentDidMount() {
    if (!document.querySelector(`#map`)) {
      return;
    }
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const iconUrl = `img/pin-map.svg`;
    const iconSize = [30, 30];
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

    const mapItem = this.props.mapMethods.createMap(mapConfig);

    offers.map((offfer) => this.props.mapMethods.addPin({
      coordinates: offfer.coordinates,
      mapItem,
      iconUrl,
      iconSize
    }));
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
  }).isRequired
};
