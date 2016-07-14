import React, {Component} from 'react';
import Message from './message';


class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convo: [
        {author: "james", text: "james is not a very nice person"},
        {author: "james", text: "james is not a very nice person"},
        {author: "james", text: "james is not a very nice person"},
        {author: "james", text: "james is not a very nice person"}
      ]
    };
  }


  render() {
    let Msgs  = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });

    return(
      <div>{Msgs}</div>
    )
  };
}

export default MessageList;
