import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="Header">
        <div className="Header__Logo color-black">JIRA KIT</div>
        <a
          className="Header__Settings color-gray"
          onClick={this.props.settingsClickedEvent}
        >
          settings
        </a>
      </div>
    );
  }
  handleClick() {
    this.props.settingsClickedEvent();
  }
}

export default Header;
