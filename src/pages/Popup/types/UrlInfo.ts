class UrlInfo {
  public id: string;

  public url: string;

  public title: string;

  public constructor(url: string, title: string) {
    const u = new URL(url);
    this.url = u.protocol + '//' + u.host + u.pathname;
    this.title = title;
    this.id = u.pathname.split('/browse/')[1];
  }
}

export default UrlInfo;
