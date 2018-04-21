import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';


class App extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const { dispatch } = this.props;

    return this.props.greetings.map(greeting => {
      const selectLanguage = () => {
        dispatch({ type: 'SELECT_LANGUAGE', payload: greeting })
      }
      return (
        <li
          key={greeting.language}
          onClick={() => {selectLanguage()}}
          >
          <h4>{greeting.language}</h4>
        </li>
      )
    })
  }

  render() {
    const { greetings, selectedGreeting: { message } } = this.props;
    return (
      <div className="app">
        <h1>{ message }</h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greetings: state.welcome,
    selectedGreeting: state.selectedGreeting,
  }
}

export default hot(module)(connect(mapStateToProps)(App));
