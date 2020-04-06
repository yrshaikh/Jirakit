import LocalStorageService from "./localStorageService";

class JiraService {

  private localStorageService: LocalStorageService;

  private jiraUrlKey = "JIRAKIT:URL";

  public constructor () {
    this.localStorageService = new LocalStorageService();
  }

  public getJiraUrl (): string {
    return this.localStorageService.get(this.jiraUrlKey);
  }

  public setJiraUrl (url: string): void {
    this.localStorageService.set(this.jiraUrlKey, url);
  }

  public reset (): void {
    this.localStorageService.clearAll();
  }
}

export default JiraService;
