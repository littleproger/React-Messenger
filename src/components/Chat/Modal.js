import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { hideEdit, editMessage } from "../actions/messageActions";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedMsg: {
        id: "",
        text: "",
      },
    };
  }

  componentDidMount() {
    this.setState({
      editedMsg: {
        id: "",
        text: this.props.editMsg.text,
      },
    });
  }

  inputHandlerEdit = (e) => {
    const text = e.target.value;
    this.setState({
      editedMsg: {
        id: this.props.editMsg.id,
        text: text,
      },
    });
  };

  editText = () => {
    this.props.editMessage(this.state.editedMsg);
    this.props.hideEdit();
    this.state.editedMsg.text = "";
  };
  render() {
    if (this.props.editMsg) {
      if (this.props.editMsg.editMsg) {
        return (
          <div className="modal flex flex-drctCol flex-vertCntr flex-spcarrnd flex-horCntr">
            <h2>Edit message</h2>
            <input
              className="editMsg-input"
              type="textarea"
              name="Edit message"
              placeholder={this.props.editMsg.text}
              onChange={(e) => this.inputHandlerEdit(e)}
            />
            <div className="editMsg-buttonDiv flex flex-vertCntr flex-spcbtwn ">
              <button
                className="editMsg-button chat-msg_button"
                type="button"
                onClick={this.editText}
              >
                Ok
              </button>
              <button
                className="editMsg-button chat-msg_button"
                type="button"
                onClick={this.props.hideEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

Modal.propTypes = {
  editMsg: PropTypes.object,
  hideEdit: PropTypes.func,
  editMessage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    editMsg: state.chat.editMsg,
  };
};
const mapDispatchToProps = {
  hideEdit,
  editMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
