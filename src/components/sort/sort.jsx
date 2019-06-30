import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortName, SortText} from "../../sort-functions";
import {WithActiveItem} from "../../hocs/with-active-item";

export class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.handleListClick = this.handleListClick.bind(this);
    props.onChangeListOpen(false);
  }

  handleListClick() {
    const {onChangeListOpen, listOpen} = this.props;
    onChangeListOpen(!listOpen);
  }

  generateChangeSort(sort) {
    return () => {
      return this.props.onChangeSort(sort);
    };
  }

  render() {
    const {listOpen} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={this.handleListClick}>
        {SortText[this.props.sort]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${listOpen && `places__options--opened`}`} onClick={this.handleListClick}>
        <li
          className="places__option places__option--active"
          tabIndex="0"
          onClick={this.generateChangeSort(SortName.POPULAR)}
        >
          Popular
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.PRICE_LOW)}
        >
          Price: low to high
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.PRICE_HIGH)}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex="0"
          onClick={this.generateChangeSort(SortName.TOP_RATED)}
        >
          Top rated first
        </li>
      </ul>
    </form>;
  }
}

Sort.propTypes = {
  onChangeSort: PropTypes.func,
  sort: PropTypes.string,
  onChangeListOpen: PropTypes.func,
  listOpen: PropTypes.bool
};

export const SortWithActiveItem = (props) => {
  return <WithActiveItem render={(data) => {
    const {activeItem, onChange} = data;

    return <Sort {...props}
      listOpen={activeItem}
      onChangeListOpen={onChange}
    />;
  }
  }
  />;
};
