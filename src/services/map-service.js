import leaflet from "leaflet";

class MapService {
  constructor() {
  }

  createMap(props) {
    const {offers, city, icon, zoom, settings} = props;


    const map = leaflet.map(settings.id, settings.options);
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.map((offer) => {
      const offerCords = offer.coordinates;
      return leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    });
  }
}

export const mapService = new MapService();
