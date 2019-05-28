import React, {PureComponent} from "react";

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };
      this.onChange = this.onChange.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onChange={this.onChange}
        activeItem={this.state.activeItem}
      />;
    }

    onChange(activeItem) {
      this.setState({
        activeItem
      });
    }
  }

  return WithActiveItem;
};
