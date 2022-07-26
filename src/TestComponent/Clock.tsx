import React, { Props } from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

export default Clock
export {
  Clock
}
