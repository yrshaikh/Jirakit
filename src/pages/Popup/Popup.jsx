import React, { Component } from 'react';
import './Popup.css';
import Header from './components/header/Header';
import Reset from './components/reset/Reset';
import Settings from './components/settings/Settings';
import Search from './components/search/Search';
import { clearAll, get, set } from './services/localStorageService';
import { getJiraUrlKey } from './services/localStorageKeys';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      jiraUrl: get(getJiraUrlKey()),
    };
    this.settingsUpdatedCallback = this.settingsUpdatedCallback.bind(this);
    this.resetCallback = this.resetCallback.bind(this);
  }
  render() {
    const app = this.state.jiraUrl ? (
      <Search jiraUrl={this.state.jiraUrl} />
    ) : (
      <Settings
        jiraUrl={this.state.jiraUrl}
        onSaveCallback={this.settingsUpdatedCallback}
      />
    );
    return (
      <div className="App">
        <Header />
        {app}
        <Reset onResetCallback={this.resetCallback} />
      </div>
    );
  }
  settingsUpdatedCallback(updatedJiraUrl) {
    this.setState({ jiraUrl: updatedJiraUrl });
    set(getJiraUrlKey(), updatedJiraUrl);
  }
  resetCallback() {
    this.setState({ jiraUrl: '' });
  }
}

export default Popup;
