import './Popup.css';

import * as React from 'react';
import JiraService from './services/jiraService';
import PageType from './types/PageType';
import Search from './components/search/Search';
import Settings from './components/settings/Settings';

interface State {
  jiraUrl: string;
}

class Popup extends React.Component<{}, State> {
  private jiraService: JiraService;

  public constructor() {
    super({});
    this.jiraService = new JiraService();
    this.state = {
      jiraUrl: this.jiraService.getJiraUrl(),
    };
    this.settingsUpdatedEventCallback = this.settingsUpdatedEventCallback.bind(this);
  }

  public render(): JSX.Element {
    const page: JSX.Element = this.getPage(this.getPageType());
    return (
      <div className="App">
        <h1>
          Hello {this.state.jiraUrl} {this.getPageType()}
        </h1>
        {page}
      </div>
    );
  }

  private getPageType(): PageType {
    if (!this.state.jiraUrl) return PageType.Settings;

    throw new Error('To be implemented');
  }

  private getPage(pageType: PageType): JSX.Element {
    switch (pageType) {
      case PageType.App:
        return <Search jiraUrl={this.state.jiraUrl} />;

      case PageType.Settings:
        return <Settings jiraUrl={this.state.jiraUrl} settingsUpdatedEvent={this.settingsUpdatedEventCallback} />;
    }
  }

  private settingsUpdatedEventCallback(updatedJiraUrl: string): void {
    // do nothing yet.
  }
}
export default Popup;
