import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import leaflet from "leaflet";

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
    const icon = leaflet.icon({
      iconUrl: `img/pin-map.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const mapConfig = {
      offers,
      city,
      icon,
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

    const mapOffers = this.props.mapMethods.createMap(mapConfig);
    this.props.mapMethods.addOffersPins({offers, mapOffers, icon});
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
    addOffersPins: PropTypes.func
  }).isRequired
};
