import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortName, SortText} from "../../sort-functions";


export class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false
    };
    this.togglelList = this.togglelList.bind(this);
  }

  togglelList() {
    this.setState((state) => {
      return {
        listOpen: !state.listOpen
      };
    });
  }

  generateChangeSort(sort) {
    return () => {
      return this.props.changeSort(sort);
    };
  }

  changeSortPopular() {
    return this.props.changeSort(SortName.popular);
  }

  render() {
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={this.togglelList}>
        {SortText[this.props.sort]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${this.state.listOpen && `places__options--opened`}`} onClick={this.togglelList}>
        <li
          className="places__option places__option--active"
          tabIndex="0"
          onClick={this.generateChangeSort(SortName.popular)}
        >
          Popular
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.priceLow)}
        >
          Price: low to high
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.priceHigh)}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.topRated)}
        >
          Top rated first
        </li>
      </ul>
    </form>;
  }
}

Sort.propTypes = {
  changeSort: PropTypes.func,
  sort: PropTypes.string
};
