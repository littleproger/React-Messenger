import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addMessage, showEdit } from "../actions/messageActions";
import { v4 as uuidv4 } from "uuid";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: {
        id: "",
        text: "",
        createdAt: "",
      },
      editedMsg: {
        id: "",
        text: "",
      },
    };
  }
  inputHandlerNew = (e) => {
    const text = e.target.value.trim();
    const id = uuidv4();
    const date = new Date();
    this.setState({
      msg: {
        text: text,
        id: id,
        createdAt: date.toString(),
      },
    });
  };

  sendText = () => {
    if (this.state.msg.text) {
      this.props.addMessage(this.state.msg);
      this.state.msg.text = "";
    }
  };

  render() {
    return (
      <div>
        <div className="pad-lr_30px chat-msg_submit flex flex-vertCntr">
          <input
            className="chat-msg_input"
            type="text"
            name="message"
            placeholder="Message"
            value={this.state.msg.text}
            onChange={(e) => this.inputHandlerNew(e)}
          />
          <button className="chat-msg_button" onClick={this.sendText}>
            Send
          </button>
          <button className="chat-msg_button editButton_size" onClick={()=>this.props.showEdit()}>&#11014;</button>
        </div>
      </div>
    );
  }
}

MessageInput.propTypes = {
  messages: PropTypes.array,
  addMessage: PropTypes.func,
  showEdit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
  };
};
const mapDispatchToProps = {
  addMessage,
  showEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
