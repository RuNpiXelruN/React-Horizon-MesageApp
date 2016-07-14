import React, { Component } from 'react';
import MessageList from './message_list';
import MessageForm from './message_form';


class App extends Component {
  render() {
    return(
      <div>
        <MessageForm />
        <MessageList />
      </div>
    )
  };
}

export default App;
