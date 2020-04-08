import './Settings.css';

import * as React from 'react';
import JiraService from '../../../common/jiraService';

interface Props {
  jiraUrl: string;
  onUpdateCallback: any;
}

interface State {
  jiraUrl: string;
}

class Settings extends React.Component<Props, State> {
  // @ts-ignore
  private jiraService: JiraService;

  public constructor(props: Props) {
    super(props);
    this.state = {
      jiraUrl: props.jiraUrl,
    };

    this.jiraService = new JiraService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  private handleChange(e: any): void {
    this.setState({ jiraUrl: e.target.value });
  }

  private async handleSave(): Promise<void> {
    const writeResponse = await this.jiraService.setJiraUrl(this.state.jiraUrl);
    console.log(writeResponse);
    this.props.onUpdateCallback(this.state.jiraUrl);
  }

  public render(): JSX.Element {
    return (
      <div className="Settings Section">
        <b className="Section__Header">Settings:</b>
        <div className="Settings__Body">
          <div className="Settings__Body__Info">
            <label className="color-gray">
              Please set you base JIRA url below to start using this extension.
              Make sure you have no trailing slash at the end. You can come back
              anytime to update this by clicking on the setting link in the
              header menu.
            </label>
          </div>
          <div>
            <input
              className="Settings__Body__Input"
              type="text"
              placeholder={'https://jira.example.com'}
              value={this.state.jiraUrl}
              onChange={this.handleChange}
            />
            <span
              className="btn Settings__Body__Button"
              onClick={this.handleSave}
            >
              Save
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
