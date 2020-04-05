import './Header.css';
import * as React from 'react';
import HeaderClickEvents from '../../types/HeaderClickEvents';
import PageType from '../../types/PageType';

interface Props {
  pageType: PageType;
  menuClicked(menu: HeaderClickEvents): any;
}

class Header extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="Header">
        <div className="Header__Logo color-black">JIRA KIT</div>
        {this.renderMenu()}
      </div>
    );
  }

  private renderMenu(): JSX.Element {
    if (this.props.pageType === PageType.App) {
      return (
        <a
          className="Header__Settings color-gray"
          onClick={(): void => this.onMenuClick(HeaderClickEvents.Settings)}
        >
          settings
        </a>
      );
    } else {
      return (
        <a
          className="Header__Settings color-gray"
          onClick={(): void => this.onMenuClick(HeaderClickEvents.BackToHome)}
        >
          back to app
        </a>
      );
    }
  }

  private onMenuClick(event: HeaderClickEvents): any {
    console.log('onMenuClick', event);
    this.props.menuClicked(event);
  }
}

export default Header;
