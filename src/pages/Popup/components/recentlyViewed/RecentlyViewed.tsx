import './RecentlyViewed.css';
import * as React from 'react';
import UrlInfo from '../../types/UrlInfo';

interface Props {
  urls: Array<UrlInfo>;
}

class RecentlyViewed extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="RecentlyViewed Section">
        <b className="Section__Header">Recently viewed:</b>
        {this.renderLinks()}
      </div>
    );
  }

  private renderLinks(): JSX.Element {
    return (
      <table className="RecentlyViewed__table">
        {this.props.urls.map((url, index) => {
          return (
            <tr className="RecentlyViewed__table__tr">
              <td className="RecentlyViewed__table__tr__td RecentlyViewed__links">
                <a href={url.url} onClick={this.handleClick}>
                  {url.id}
                </a>
              </td>
              <td className="RecentlyViewed__table__tr__td">
                {url.title}
              </td>
            </tr>
          );
        })}
      </table>
    );
  }

  private handleClick(e: any): void {
    e.preventDefault();
    // @ts-ignore
    chrome.tabs.create({ url: e.target.href });
  }
}

export default RecentlyViewed;
