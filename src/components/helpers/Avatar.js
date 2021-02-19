import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
    return (
        <div className="avatarDIV flex flex-vertCntr">
            <img className="avatar" src={props.src} alt="Avatar"/>
        </div>
    )
}

Avatar.propTypes = {
  src: PropTypes.string
};

export default Avatar
