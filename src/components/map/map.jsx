import leaflet from "leaflet";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

export class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: 823}}></div>;
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin-map.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    try {
      const map = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      map.setView(city, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      offers.map((offer) => {
        const offerCords = offer.coordinate;
        return leaflet
          .marker(offerCords, {icon})
          .addTo(map);
      });
    } catch (e) {
      return;
    }
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired
};
