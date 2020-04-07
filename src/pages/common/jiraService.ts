import JiraInfo from '../Popup/types/JiraInfo';
import StorageService from './storageService';
import UrlService from './urlService';

class JiraService {
  private storageService: StorageService;

  private urlService: UrlService;

  public constructor() {
    this.storageService = new StorageService();
    this.urlService = new UrlService();
  }

  public async getJiraInfo(): Promise<JiraInfo> {
    return await this.storageService.get().then(function (response: JiraInfo) {
      console.log('getJiraInfo', response);
      if (!response) return new JiraInfo('', '');
      return response;
    });
  }

  public async setJiraUrl(url: string): Promise<any> {
    const jiraType: JiraInfo = new JiraInfo(url, 'testetes');
    return await this.storageService.set(jiraType);
  }

  public async reset(): Promise<any> {
    return await this.storageService.clear();
  }

  public async isValidJiraUrl(url: string): Promise<boolean> {
    const jiraInfo = await this.getJiraInfo();
    return this.urlService.haveSameHostNames(jiraInfo.jiraUrl, url);
  }
}

export default JiraService;
