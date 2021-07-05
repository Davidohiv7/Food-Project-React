import React from 'react';
import './Success.css';


export default function Success({ success, setSuccess }) {

    return (
        <div id='SuccessContainer'>
            <button onClick={() => setSuccess(false)}>X</button>
            <span>{success}</span>
        </div>
    )

}