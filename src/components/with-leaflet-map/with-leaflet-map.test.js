import React from 'react';
import renderer from 'react-test-renderer';

import {WithLeafletMap} from "./with-leaflet-map";

const render = () => {
  return <div id="map" style={{height: 823}}></div>;
};

describe(`testing WithLeafletMap render`, () => {
  it(`WithLeafletMap is render correctly`, () => {
    const tree = renderer.create(<WithLeafletMap
      render={render}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
