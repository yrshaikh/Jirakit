import './Popup.css';

import * as React from 'react';
import ClickEvents from './types/ClickEvents';
import Header from './components/header/Header';
import JiraService from '../common/jiraService';
import PageType from './types/PageType';
import Search from './components/search/Search';
import Settings from './components/settings/Settings';

interface State {
  isReady: boolean;
  jiraUrl: string;
  pageType: PageType;
}

class Popup extends React.Component<{}, State> {
  public constructor(props: any) {
    super(props);
    this.jiraService = new JiraService();

    this.state = {
      isReady: false,
      jiraUrl: '',
      pageType: PageType.App,
    };

    this.menuClickCallback = this.menuClickCallback.bind(this);
    this.settingsUpdatedCallback = this.settingsUpdatedCallback.bind(this);
  }

  public async componentDidMount() {
    const response = await this.jiraService.getJiraInfo();
    console.log(response);
    this.setState({ isReady: true });
    this.setState({ jiraUrl: response });
  }

  private jiraService: JiraService;

  public render(): JSX.Element {
    if (!this.state.isReady) return <div />;
    const page: JSX.Element = this.getPage(this.state.pageType);
    return (
      <div className="App">
        <Header
          pageType={this.state.pageType}
          menuClicked={this.menuClickCallback}
        />
        {page}
      </div>
    );
  }

  private getPage(pageType: PageType): JSX.Element {
    switch (pageType) {
      case PageType.App:
        return <Search jiraUrl={this.state.jiraUrl} />;

      case PageType.Settings:
        return (
          <Settings
            jiraUrl={this.state.jiraUrl}
            onUpdateCallback={this.settingsUpdatedCallback}
          />
        );
    }
  }

  private menuClickCallback(event: ClickEvents): void {
    if (event === ClickEvents.Settings) {
      this.setState({ pageType: PageType.Settings });
    } else if (event === ClickEvents.Home) {
      this.setState({ pageType: PageType.App });
    } else if (event === ClickEvents.Reset) {
      this.resetApp();
    }
  }

  private settingsUpdatedCallback(updatedJiraUrl: string): void {
    this.setState({ jiraUrl: updatedJiraUrl });
    this.setState({ pageType: PageType.App });
  }

  private resetApp(): void {
    const response: boolean = confirm(
      'Do you really want to reset the app? Once you reset the app, there is no going back. Please be certain..'
    );

    if (!response) {
      return;
    }

    this.jiraService.reset();
    this.setState({ jiraUrl: '' });
    this.setState({ pageType: PageType.Settings });
  }
}
export default Popup;
