import React from "react";

export const withScreenSwitch = ({Component, screenSwitch}) => {
  const WithScrieenSwitch = (props) => {
    return <Component {...props} screenSwitch={screenSwitch}/>;
  };

  return WithScrieenSwitch;
};


