import LocalStorageService from './localStorageService';

class JiraService {
  private localStorageService: LocalStorageService;

  public constructor() {
    this.localStorageService = new LocalStorageService();
  }

  public getJiraUrl(): string {
    const jiraUrl = this.localStorageService.get('JIRAKIT:URL');
    return jiraUrl;
  }
}

export default JiraService;
