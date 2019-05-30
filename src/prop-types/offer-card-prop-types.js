import PropTypes from "prop-types";

export const offerCardPropTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  titleOnClick: PropTypes.func.isRequired,
  imgOnClick: PropTypes.func.isRequired
};
