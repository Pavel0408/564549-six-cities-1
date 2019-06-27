import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  avatar: PropTypes.string,
  isPro: PropTypes.bool
});

