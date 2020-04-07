import JiraService from '../common/jiraService';

class ContentApp {
  private readonly url: string;

  private readonly jiraService: JiraService;

  public constructor(url: string) {
    this.url = url;
    this.jiraService = new JiraService();
  }

  public async run(): Promise<void> {
    console.log('inside run() in ContentApp.ts', this.url);
    const isValid = await this.jiraService.isValidJiraUrl(this.url);
    console.log('this.jiraService.isValidJiraUrl', isValid);
  }
}

export default ContentApp;
