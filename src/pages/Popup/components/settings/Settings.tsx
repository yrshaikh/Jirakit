import './Settings.css';

import * as React from 'react';

interface Props {
  jiraUrl: string;
}

interface State {
  jiraUrl: string;
}

class Settings extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      jiraUrl: props.jiraUrl,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  private handleChange(e: any): void {
    this.setState({ jiraUrl: e.target.value });
  }

  private handleSave(): void {
    alert("save button pressed");
  }

  public render(): JSX.Element {
    return (
      <div className="Settings">
        <h3>Settings</h3>
        <div>
          <label>Please enter your JIRA URL here</label>
          <br />
          <input
            type="text"
            placeholder={'https://jira.example.com'}
            value={this.state.jiraUrl}
            onChange={this.handleChange}
          />
          <span className="btn" onClick={this.handleSave}>Save</span>
        </div>
      </div>
    );
  }
}

export default Settings;
