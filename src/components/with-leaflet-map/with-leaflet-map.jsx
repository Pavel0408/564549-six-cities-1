import leaflet from "leaflet";
import {PureComponent} from "react";
import PropTypes from "prop-types";

export class WithLeafletMap extends PureComponent {


  render() {
    return this.props.render({createMap: this.createMap, addOffersPins: this.addOffersPins});
  }

  createMap(props) {

    const {city, zoom, settings} = props;

    const map = leaflet.map(settings.id, settings.options);
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    return map;
  }

  addOffersPins({offers, mapOffers, icon}) {
    offers.map((offer) => {
      const offerCords = offer.coordinates;
      return leaflet
        .marker(offerCords, {icon})
        .addTo(mapOffers);
    });
  }
}

WithLeafletMap.propTypes = {
  render: PropTypes.func.isRequired
};


