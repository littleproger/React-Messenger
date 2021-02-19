import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { addFetchedMessage, deleteMessage, showEdit } from "../actions/messageActions";
import { changeHeaderData } from "../actions/headerActions";

import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Modal from "./Modal";
import Spiner from "../animatedElem/Spiner";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomInform: {
        roomName: "My chat",
        numberUsers: 0,
        numberMessages: 0,
        lastMessageDate: "0",
      },
      messages: [],
      myInform: {
        userId: "61325",
        avatar:
          "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
        user: "Wendy",
      },
      edtMsg: {
        id: "",
        editMsg: false,
        text: "",
      },
    };
  }
  
  componentDidMount() {
    fetch("https://edikdolynskyi.github.io/react_sources/messages.json")
      .then((response) => response.json())
      .then((data) => {
        this.props.addFetchedMessage(data);
      });
  }

  render() {
    return (
      <div className="pad-lr_chat">
        <Modal />
        <Header roomInfo={this.props.headerInform} />
        <div className="chat-messageWndw marg-t_20px">
          {this.props.messages.length !== 0 ? (
            <MessageList
              messages={this.props.messages}
              myId={this.props.myInform.userId}
              deleteMessage={this.props.deleteMessage}
              clickToEdit={this.props.showEdit}
            />
          ) : (
            <Spiner />
          )}
        </div>
        <MessageInput addMessage={this.props.addMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  myInform: PropTypes.object,
  headerInform: PropTypes.object,
  addFetchedMessage: PropTypes.func,
  deleteMessages: PropTypes.func,
  showEdit:PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    myInform: state.chat.myInform,
    headerInform: state.header,
  };
};
const mapDispatchToProps = {
  addFetchedMessage,
  deleteMessage,
  showEdit
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
