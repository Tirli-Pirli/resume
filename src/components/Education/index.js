import React from 'react';
import './index.css';

function Education({schoolName, year, degree, className}) {
    const classes = `Education ${className}`;

    
    return <React.Fragment>
        <ul className={classes}>
            <li>{schoolName}</li>
            <li>{year}</li>
            <li>{degree}</li>
            <hr/>
        </ul>
    </React.Fragment>
}

export default Education