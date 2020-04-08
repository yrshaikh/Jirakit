import JiraInfo from '../Popup/types/JiraInfo';
import StorageService from './storageService';
import UrlInfo from '../Popup/types/UrlInfo';
import UrlService from './urlService';
// @ts-ignore
import _ from 'lodash';

class JiraService {
  private storageService: StorageService;

  private urlService: UrlService;

  public constructor() {
    this.storageService = new StorageService();
    this.urlService = new UrlService();
  }

  public async getJiraBaseUrl(): Promise<string> {
    const jiraKitAppInfo = await this.getJiraKitAppInfo();
    return jiraKitAppInfo.url;
  }

  public async setJiraUrl(url: string): Promise<any> {
    const jiraInfo: JiraInfo = new JiraInfo(url, 'Jetbrains');
    return await this.storageService.set(jiraInfo);
  }

  public async reset(): Promise<any> {
    return await this.storageService.clear();
  }

  public async isValidJiraUrl(url: string): Promise<boolean> {
    const jiraInfo = await this.getJiraKitAppInfo();
    return this.urlService.haveSameHostNames(jiraInfo.url, url)
      && url.indexOf('/browse/') !== -1;
  }

  public async addUrl(url: UrlInfo): Promise<any> {
    const jiraInfo = await this.getJiraKitAppInfo();

    const alreadyExist = _.find(jiraInfo.recentlyViewed, function(o: any) {
      return o.id === url.id;
    });

    if (alreadyExist) return;

    jiraInfo.recentlyViewed.push(url);
    return await this.storageService.set(jiraInfo);
  }

  public async getJiraKitAppInfo(): Promise<JiraInfo> {
    return await this.storageService.get().then(function(response: JiraInfo) {
      console.log('getJiraKitAppInfo', response);
      if (!response) return new JiraInfo('', '');
      return response;
    });
  }
}

export default JiraService;
