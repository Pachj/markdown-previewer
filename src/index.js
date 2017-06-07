/**
 * Created by Henry on 07.06.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
