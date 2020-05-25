import React from 'react';

import './index.css';

function Badges({className, skillOne, skillTwo, skillThree, skillFour}) {
    const classes = `Badges ${className}`;

    
    return <React.Fragment>
        <ul className={classes}>
            <li>{skillOne}</li>
            <li>{skillTwo}</li>
            <li>{skillThree}</li>
            <li>{skillFour}</li>
        </ul>
    </React.Fragment>
}

export default Badges