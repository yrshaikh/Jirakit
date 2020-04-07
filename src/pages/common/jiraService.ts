import JiraType from '../Popup/types/JiraType';
import StorageService from './storageService';

class JiraService {
  private storageService: StorageService;

  public constructor() {
    this.storageService = new StorageService();
  }

  public async getJiraInfo(): Promise<string> {
    return await this.storageService.get().then(function (response: JiraType) {
      console.log('getJiraInfo', response);
      return response ? response.jiraUrl : '';
    });
  }

  public async setJiraUrl(url: string): Promise<any> {
    const jiraType: JiraType = new JiraType(url, 'testetes');
    return await this.storageService.set(jiraType);
  }

  public async reset(): Promise<any> {
    return await this.storageService.clear();
  }
}

export default JiraService;
