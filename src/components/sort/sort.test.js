import React from 'react';
import renderer from 'react-test-renderer';

import {Sort} from "./sort";
import {SortName} from "../../sort-functions";

const sort = SortName.popular;
const changeSort = () => {};
const changeListOpen = () => {};

describe(`testing Sort render`, () => {
  it(`Sort is render correctly`, () => {
    const tree = renderer.create(

        <Sort
          sort={sort}
          changeSort={changeSort}
          changeListOpen={changeListOpen}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


