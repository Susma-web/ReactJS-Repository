import React from 'react';
import ReactDOM from 'react-dom';

class LoggingButtonFunc extends React.Component<any, any> {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }

  export default LoggingButtonFunc
  export {
    LoggingButtonFunc
  }    