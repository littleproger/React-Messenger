import React from 'react';
import PropTypes from 'prop-types';

function Edit(props) {
    return (
        <>
            <svg onClick={props.func} className="msg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"/>
            </svg>
        </>
    )
}
Edit.propTypes = {
  func: PropTypes.func
};

export default Edit
