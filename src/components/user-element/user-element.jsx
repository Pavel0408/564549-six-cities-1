import React from "react";
import {Link} from "react-router-dom";

export const UserElement = (props) => {
  const {fetchFavorite, user} = props;
  return <Link
    className="header__nav-link header__nav-link--profile"
    to={`/favorites`} onClick={fetchFavorite}> <div className="header__avatar-wrapper user__avatar-wrapper">
      <img src={`https://es31-server.appspot.com/six-cities${user.avatar}`}/>
      <span className="header__user-name user__name">{user.email}</span>
    </div>
  </Link>;
};
