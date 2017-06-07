/**
 * Created by Henry on 07.06.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredText: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ enteredText: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea id="input" value={this.state.enteredText} onChange={this.handleInput}/>
        <textarea id="output"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
