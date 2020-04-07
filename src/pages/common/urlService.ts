class UrlService {
  private url: string;

  public constructor(url: string) {
    console.log("url received", url);
    this.url = url;
  }

  public isValid(): boolean {
    return this.url.indexOf('google.com') !== -1;
  }
}

export default UrlService;
