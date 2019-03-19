import React from 'react';
import './Button.css';


const ButtonRow = props => {
    return (
        <div className = {`button-row`}>
            {props.children}
        </div>
    )
}

export default ButtonRow;