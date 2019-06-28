import PropTypes from "prop-types";
import React, {PureComponent} from "react";

export class City extends PureComponent {
  constructor(props) {
    super(props);

    this.cityClickHandle = this.cityClickHandle.bind(this);
  }

  cityClickHandle(evt) {
    evt.preventDefault();
    this.props.cityClickHandle(this.props.city);
  }

  render() {
    const isActive = this.props.isActive;

    return <li className="locations__item">
      <a className={isActive ? `locations__item-link tabs__item tabs__item tabs__item--active` : `locations__item-link tabs__item tabs__item`} onClick={this.cityClickHandle}>
        <span>{this.props.city}</span>
      </a>
    </li>;
  }
}

City.propTypes = {
  cityClickHandle: PropTypes.func,
  city: PropTypes.string,
  isActive: PropTypes.bool
};
