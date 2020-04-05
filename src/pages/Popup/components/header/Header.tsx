import * as React from 'react';
import './Header.css';

interface Props {
  settingsClickedEvent: any
}

class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
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
