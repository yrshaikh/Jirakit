import './Search.css';
import * as React from 'react';

interface Props {
  jiraUrl: string;
}

interface State {
  jiraId: string;
  jiraLandingUrl: string;
}

class Search extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      jiraId: '',
      jiraLandingUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="Search">
        <b className="Search__Header">Quick Launch:</b>
        {this.props.jiraUrl ? this.renderSearchBody() : this.renderError()}
      </div>
    );
  }

  private renderError(): JSX.Element {
    return <div className="Search__Error">Base JIRA url is not set yet. Please go to settings and set one first.</div>;
  }

  private renderSearchBody(): JSX.Element {
    return (
      <div className="Search__Body">
        <span className="Search__Body__Label">
          {this.props.jiraUrl}/browse/
        </span>
        <input
          type="text"
          className="Search__Body__Input"
          placeholder={'JIRA-ID'}
          value={this.state.jiraId}
          onChange={this.handleChange}
          autoFocus
        />
        <a
          className="btn Search__Body__Button"
          target={'_blank'}
          href={this.state.jiraLandingUrl}
        >
          Open
        </a>
      </div>
    );
  }
  private handleChange(e: any): void {
    const jiraId = e.target.value;
    this.setState({ jiraId: jiraId });
    this.setState({ jiraLandingUrl: this.props.jiraUrl + '/browse/' + jiraId });
  }
}

export default Search;
