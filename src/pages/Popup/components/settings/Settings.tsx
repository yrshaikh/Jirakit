import './Settings.css';

import * as React from 'react';

interface Props {
  jiraUrl: string;
  settingsUpdatedEvent: any;
}



interface State {
  jiraUrl: string;
}

class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      jiraUrl: props.jiraUrl,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(e: any) {
    this.setState({ jiraUrl: e.target.value });
  }
  handleSave() {
    this.props.settingsUpdatedEvent(this.state.jiraUrl);
  }
  render() {
    return (
      <div className="Settings">
        <h3>Settings</h3>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque gravida augue, id pretium dolor
          lobortis vitae. Nulla semper, nisi ut elementum elementum, purus turpis hendrerit ligula, ut accumsan orci
          nunc id dui
        </p>
        <div>
          <label>Please enter your JIRA URL here</label>
          <br />
          <input
            type="text"
            placeholder={'https://jira.example.com'}
            value={this.state.jiraUrl}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

export default Settings;
