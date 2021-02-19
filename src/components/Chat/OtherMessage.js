import React from "react";
import PropTypes from 'prop-types';
import Avatar from "../helpers/Avatar";
import Like from "../helpers/Like";

function OtherMessage(props) {
  return (
    <div className=" flex flex-vertCntr pos_left marg-t_20px pad-l_10px">
      <Avatar src={props.data.avatar} />
      <div className="chat-msg chat-msg_left">
        <div className="font-small">{props.data.user}</div>
        <div className="font-mid">{props.data.text}</div>
        <div className="msg-date">
          {props.newMsg
            ? `${props.time.hour}:${props.time.minute}`
            : `${props.time.hour}:${props.time.minute} (edited)`}
        </div>
        <div className="msg-iconDiv">
          <label>
            <input type="checkbox" className="likeDiv visible-hide" />
            <Like />
          </label>
        </div>
      </div>
    </div>
  );
}

OtherMessage.propTypes = {
  time: PropTypes.object,
  newMsg: PropTypes.bool,
  data: PropTypes.object
};


export default OtherMessage;
