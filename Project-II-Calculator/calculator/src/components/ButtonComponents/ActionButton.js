import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`big-button button-${props.text}`}>
            {props.text}
        </button>
    )
}

export default ActionButton;