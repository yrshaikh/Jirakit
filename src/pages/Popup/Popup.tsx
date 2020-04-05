import './Popup.css';

import * as React from 'react';
import Header from './components/header/Header';
import HeaderClickEvents from './types/HeaderClickEvents';
import JiraService from './services/jiraService';
import PageType from './types/PageType';
import Search from './components/search/Search';
import Settings from './components/settings/Settings';

interface State {
  jiraUrl: string;
  pageType: PageType;
}

class Popup extends React.Component<{}, State> {
  private jiraService: JiraService;

  public constructor(props: any) {
    super(props);
    this.jiraService = new JiraService();
    const pageType: PageType = this.jiraService.getJiraUrl()
      ? PageType.App
      : PageType.Settings;
    this.state = {
      jiraUrl: this.jiraService.getJiraUrl(),
      pageType: pageType,
    };
    this.menuClickCallback = this.menuClickCallback.bind(this);
  }

  public render(): JSX.Element {
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
        return <Settings jiraUrl={this.state.jiraUrl} />;
    }
  }

  private menuClickCallback(event: HeaderClickEvents): void {
    console.log('menuclickcallback', event);
    if (event === HeaderClickEvents.Settings) {
      this.setState({ pageType: PageType.Settings });
    } else {
      this.setState({ pageType: PageType.App });
    }
  }
}
export default Popup;
