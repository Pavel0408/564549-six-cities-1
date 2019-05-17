// import leaflet from "leaflet";
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
    const {offers} = this.props;
    this.props.service.render(offers);
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
  service: PropTypes.shape({
    render: PropTypes.func
  }).isRequired
};
