class JiraInfo {
  public jiraUrl: string;

  public other: string;

  public constructor(jiraUrl: string, other: string) {
    this.jiraUrl = jiraUrl;
    this.other = other;
  }
}

export default JiraInfo;
