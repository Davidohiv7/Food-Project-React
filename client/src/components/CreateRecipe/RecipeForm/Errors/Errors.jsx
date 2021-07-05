import React from 'react';
import './Errors.css';
import './ErrorsMobile.css';


export default function Errors({ errors, setErrors }) {

    return (
        <div id='ErrorsContainer'>
            <button onClick={() => setErrors(false)}>X</button>
            {
                errors.map(et => {
                    return (
                    <div className='ErrorTypeContainer'>
                        {
                            et.map(e => {
                                return <span key='e'>{e}</span>
                            })
                        }
                    </div>
                    )
                })
            }
        </div>
    )

}