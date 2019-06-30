import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {userPropTypes} from "../../prop-types/user-prop-types";

export const UserElement = (props) => {
  const {onFetchFavorite, user} = props;
  return <Link
    className="header__nav-link header__nav-link--profile"
    to={`/favorites`} onClick={onFetchFavorite}> <div className="header__avatar-wrapper user__avatar-wrapper">
      <img src={`https://es31-server.appspot.com/six-cities${user.avatar}`}/>
      <span className="header__user-name user__name">{user.email}</span>
    </div>
  </Link>;
};

UserElement.propTypes = {
  onFetchFavorite: PropTypes.func,
  user: userPropTypes
};
