import PropTypes from "prop-types";

export const offersPropTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  city: PropTypes.string.isRequired
})).isRequired;
