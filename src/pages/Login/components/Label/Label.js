import React from 'react';
import './label.css'

const Label = (props) => {
    const {text} = props;
    return (
        <div className="label-container">
            <label>{text}</label>
        </div>
    );
}

export default Label