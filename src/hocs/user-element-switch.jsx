import React from "react";

import {UserElement} from "../components/user-element/user-element";
import {UserEmptyElement} from "../components/user-empty-element/user-empty-element";
import {userPropTypes} from "../prop-types/user-prop-types";

export const UserElementSwitch = (props) => {
  const {user} = props;
  return user ? <UserElement user={user}/> : <UserEmptyElement/>;
};

UserElementSwitch.propTypes = {
  user: userPropTypes
};
