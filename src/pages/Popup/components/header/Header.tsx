import './Header.css';
import * as React from 'react';
import ClickEvents from '../../types/ClickEvents';
import PageType from '../../types/PageType';

interface Props {
  pageType: PageType;
  menuClicked(menu: ClickEvents): any;
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
    const menuList: Array<ClickEvents> = [];
    menuList.push(ClickEvents.Reset);

    if (this.props.pageType === PageType.App) {
      menuList.push(ClickEvents.Settings);
    } else {
      menuList.push(ClickEvents.Home);
    }

    return (
      <>
        {menuList.map((eventType, index) => {
          return (
            <a
              key={index}
              className="Header__Settings color-gray"
              onClick={(): void => this.onMenuClick(eventType)}
            >
              {eventType}
            </a>
          );
        })}
      </>
    );
  }

  private onMenuClick(event: ClickEvents): any {
    this.props.menuClicked(event);
  }
}

export default Header;
