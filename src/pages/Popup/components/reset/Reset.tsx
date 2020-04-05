import * as React from 'react';
import { clearAll } from '../../services/localStorageService';

interface Props {
  onResetEvent: any;
}

class Reset extends React.Component<Props, {}> {
  constructor(props: Props) {
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
