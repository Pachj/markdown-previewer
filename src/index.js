/**
 * Created by Henry on 07.06.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function InputField() {
  return (
    <textarea />
  );
}

function OutputField() {
  return (
    <h2>Hello</h2>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredText: '',
      markedText: '',
    };
  }

  render() {
    return (
      <div>
        <InputField />
        <OutputField />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
