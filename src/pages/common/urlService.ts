class UrlService {
  public haveSameHostNames(url1: string, url2: string): boolean {
    const host1 = this.getHostName(url1);
    const host2 = this.getHostName(url2);

    return host1 === host2;
  }

  private getHostName(url: string): string {
    try {
      const u = new URL(url);
      return u.host;
    } catch (e) {
      return '';
    }
  }
}

export default UrlService;
