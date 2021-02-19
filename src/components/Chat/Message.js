import React from "react";
import PropTypes from 'prop-types';
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

function Message(props) {
  let [hour, minute] = "";
  let newMsg = true;
  if (props.data.editedAt) {
    [hour, minute] = new Date(props.data.editedAt)
      .toLocaleTimeString()
      .split(":");
    newMsg = false;
  } else {
    [hour, minute] = new Date(props.data.createdAt)
      .toLocaleTimeString()
      .split(":");
  }

  return (
    <div>
      {props.data.userId === props.myId ? (
        <MyMessage
          clickToEdit={props.clickToEdit}
          deleteMessage={props.deleteMessage}
          time={{ hour, minute }}
          newMsg={newMsg}
          data={props.data}
        />
      ) : (
        <OtherMessage
          time={{ hour, minute }}
          newMsg={newMsg}
          data={props.data}
        />
      )}
    </div>
  );
}

Message.propTypes = {
  myId: PropTypes.string,
  data: PropTypes.object,
  clickToEdit: PropTypes.func,
  deleteMessage: PropTypes.func
};

export default Message;
