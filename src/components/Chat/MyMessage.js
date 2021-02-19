import React from "react";
import PropTypes from 'prop-types';
import Like from "../helpers/Like";
import Delete from "../helpers/Delete";
import Edit from "../helpers/Edit";

function MyMessage(props) {
  return (
    <div
      id={props.data.id}
      className=" flex flex-vertCntr flex-drctCol marg-t_20px pos_right pad-r_10px"
    >
      <div className="chat-msg chat-msg_rightDIV">
        <div className="chat-msg_right">
          <div className="font-mid">{props.data.text}</div>
          <div className="msg-date flex flex-spcbtwn">
            {props.newMsg
              ? `${props.time.hour}:${props.time.minute}`
              : `${props.time.hour}:${props.time.minute} (edited)`}
          </div>
        </div>
        <div className="flex flex-vertCntr flex-spcbtwn width_100prc msg-iconDiv marg-t_20px">
          <div className="like-right_size marg-l_20px">
            <Like />
          </div>
          <div className="flex flex-vertCntr flex-spcbtwn smartIcon">
            <div className="flex flex-vertCntr edit-button ">
              <Edit func={() => props.clickToEdit(props.data.id)} />
            </div>
            <Delete func={() => props.deleteMessage(props.data.id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

MyMessage.propTypes = {
  time: PropTypes.object,
  newMsg: PropTypes.bool,
  data: PropTypes.object,
  clickToEdit: PropTypes.func,
  deleteMessage: PropTypes.func
};

export default MyMessage;
