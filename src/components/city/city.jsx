import PropTypes from "prop-types";
import React, {PureComponent} from "react";

export class City extends PureComponent {
  constructor(props) {
    super(props);

    this._city = props.city;
    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  cityClickHandler(evt) {
    evt.preventDefault();
    console.log(222);
    console.log(this);
    this.props.cityClickHandler(this._city);
  }

  render() {
    const isActive = this.props.isActive;

    return <li className="locations__item">
      <a className={isActive ? `locations__item-link tabs__item tabs__item tabs__item--active` : `locations__item-link tabs__item tabs__item`} onClick={this.cityClickHandler}>
        <span>{this._city}</span>
      </a>
    </li>;
  }
}
