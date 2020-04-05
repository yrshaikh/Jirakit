import * as React from 'react';
import './Search.css';

interface Props {
  jiraUrl: string;
}

interface State {
  jiraId: string;
  jiraLandingUrl: string;
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      jiraId: '',
      jiraLandingUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="Search">
        <b className="Search__Header">Quick Launch:</b>
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
          />
          <a
            className="btn Search__Body__Button"
            target={'_blank'}
            href={this.state.jiraLandingUrl}
          >
            Open
          </a>
        </div>
      </div>
    );
  }
  handleChange(e: any) {
    const jiraId = e.target.value;
    this.setState({ jiraId: jiraId });
    this.setState({ jiraLandingUrl: this.props.jiraUrl + '/browse/' + jiraId });
  }
}

export default Search;
