import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jiraId: '',
      jiraLandingUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h2>Quick Search</h2>
        <div>
          <span>{this.props.jiraUrl}browse/</span>
          <input
            type="text"
            placeholder={'JIRA ID : ABC-123'}
            value={this.state.jiraId}
            onChange={this.handleChange}
          />
        </div>
        <a target={'_blank'} href={this.state.jiraLandingUrl}>
          Open
        </a>
      </div>
    );
  }
  handleChange(e) {
    const jiraId = e.target.value;
    this.setState({ jiraId: jiraId });
    this.setState({ jiraLandingUrl: this.props.jiraUrl + 'browse/' + jiraId });
  }
}

export default Search;
