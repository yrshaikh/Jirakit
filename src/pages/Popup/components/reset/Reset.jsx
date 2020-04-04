import React from 'react';
import { clearAll } from '../../services/localStorageService';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.handleResetAll = this.handleResetAll.bind(this);
  }
  render() {
    return <a onClick={this.handleResetAll}>reset all</a>;
  }

  handleResetAll() {
    clearAll();
    this.props.onResetEvent();
  }
}

export default Reset;
