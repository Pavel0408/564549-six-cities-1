import {PureComponent} from "react";
import PropTypes from "prop-types";

export class WithActiveItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: null
    };
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return this.props.render({
      onChange: this.onChange,
      activeItem: this.state.activeItem
    });
  }

  onChange(activeItem) {
    this.setState({
      activeItem
    });
  }
}

WithActiveItem.propTypes = {
  render: PropTypes.func.isRequired
};

