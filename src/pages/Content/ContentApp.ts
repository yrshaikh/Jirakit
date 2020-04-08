import JiraService from '../common/jiraService';
import UrlInfo from '../Popup/types/UrlInfo';

class ContentApp {
  private readonly url: string;

  private readonly title: string;

  private readonly jiraService: JiraService;

  public constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
    this.jiraService = new JiraService();
  }

  public async run(): Promise<void> {
    const isValid = await this.jiraService.isValidJiraUrl(this.url);
    if (!isValid) return;
    await this.jiraService.addUrl(new UrlInfo(this.url, this.title));
  }
}

export default ContentApp;
