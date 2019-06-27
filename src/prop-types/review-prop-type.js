import PropTypes from "prop-types";

export const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number,
  userId: PropTypes.number,
  userIsPro: PropTypes.bool,
  userAvatar: PropTypes.string,
  rating: PropTypes.number,
  message: PropTypes.string,
  date: PropTypes.date
})
