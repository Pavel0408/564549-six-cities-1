import React from 'react';
import renderer from 'react-test-renderer';

import {Sort} from "./sort";
import {SortName} from "../../sort-functions";

const sort = SortName.POPULAR;
const onChangeSort = () => {};
const onChangeListOpen = () => {};

describe(`testing Sort render`, () => {
  it(`Sort is render correctly`, () => {
    const tree = renderer.create(

        <Sort
          sort={sort}
          onChangeSort={onChangeSort}
          onChangeListOpen={onChangeListOpen}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


