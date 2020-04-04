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
    this.pageTypes = {
      HOME: 'home',
      SETTINGS: 'settings',
    };
    const jiraUrl = get(getJiraUrlKey());
    this.state = {
      jiraUrl: jiraUrl,
      pageType: jiraUrl ? this.pageTypes.HOME : this.pageTypes.SETTINGS,
    };
    this.settingsUpdatedEventCallback = this.settingsUpdatedEventCallback.bind(this);
    this.settingsClickedEventCallback = this.settingsClickedEventCallback.bind(this);
    this.resetEventCallback = this.resetEventCallback.bind(this);
  }
  render() {
    const app =
      this.state.pageType === this.pageTypes.HOME ? (
        <Search jiraUrl={this.state.jiraUrl} />
      ) : (
        <Settings
          jiraUrl={this.state.jiraUrl}
          settingsUpdatedEvent={this.settingsUpdatedEventCallback}
        />
      );
    return (
      <div className="App">
        <Reset onResetEvent={this.resetEventCallback} />
        <Header
          adsasd={'323'}
          asdasdasasdads={1}
          settingsClickedEvent={this.settingsClickedEventCallback}
        />
        {app}
      </div>
    );
  }
  settingsClickedEventCallback() {
    this.setState({ pageType: this.pageTypes.SETTINGS });
  }
  settingsUpdatedEventCallback(updatedJiraUrl) {
    this.setState({ jiraUrl: updatedJiraUrl });
    set(getJiraUrlKey(), updatedJiraUrl);
  }
  resetEventCallback() {
    this.setState({ jiraUrl: '' });
    this.setState({ pageType: this.pageTypes.SETTINGS });
  }
}

export default Popup;
