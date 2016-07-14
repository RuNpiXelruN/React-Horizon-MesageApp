import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return(
      <div>
        {this.props.msg.author} posted: {this.props.msg.text}
      </div>
    )
  };
}

export default Message;
