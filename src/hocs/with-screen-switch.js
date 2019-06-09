import React from "react";

export const withScreenSwitch = ({Component, ScreenSwitch}) => {
  const WithScrieenSwitch = (props) => {
    return <Component {...props} screenSwitch={ScreenSwitch}/>;
  };

  return WithScrieenSwitch;
};


