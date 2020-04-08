import UrlInfo from './UrlInfo';

class JiraInfo {
  public url: string;

  public other: string;

  public recentlyViewed: Array<UrlInfo>;

  public constructor(url: string, other: string) {
    this.url = url;
    this.other = other;
    this.recentlyViewed = [];
  }
}

export default JiraInfo;
