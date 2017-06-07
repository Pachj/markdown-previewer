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

    // binds this in handleInput to the class
    this.handleInput = this.handleInput.bind(this);
  }

  /** stores  the input who the user enters in the #input textarea to the state
   * @param event - the entered text
   */
  handleInput(event) {
    this.setState({ enteredText: event.target.value });
  }

  /** creates a markup from the text who the user had entered
   * @return {Object} - the markup of the text
   */
  createMarkup() {
    const marked = require('marked');
    return ({ __html: marked(this.state.enteredText) });
  }

  render() {
    return (
      <div>
        <textarea id="input" value={this.state.enteredText} onChange={this.handleInput} />
        <span dangerouslySetInnerHTML={this.createMarkup()} id="output" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
