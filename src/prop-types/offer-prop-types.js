import PropTypes from "prop-types";

export const offerPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  city: PropTypes.string,
  allImages: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  maxAdults: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  description: PropTypes.string,
  zoom: PropTypes.number,
  id: PropTypes.number
});

