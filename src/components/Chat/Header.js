import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    const roomInfo = props.roomInfo;
    return (
        <div className="room-header flex pos-right flex-spcbtwn flex-vertCntr pad-t_20px">
            <div className="flex flex-spcbtwn width_30prc pad-lr_30px">
                <h3>{roomInfo.roomName}</h3>
                <h3>{roomInfo.numberUsers} participants</h3>
                <h3>{roomInfo.numberMessages} message</h3>
            </div>
            <div className="pad-lr_30px">
                <h3>last message at {roomInfo.lastMessageDate}</h3>
            </div>
        </div>
    )
}

Header.propTypes = {
  roomInfo: PropTypes.object
};

export default Header
