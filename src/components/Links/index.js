import React from 'react';
import './index.css'; 

function Links({children, alt, src, href, className }) {
    const classes = `Links ${className}`;

    return <React.Fragment>
        <ul className={classes}>
            <li className='d_align_c'>
            <img src={src} alt={alt}></img>
            <a className='remove_txt_decor' href={href}>{children}</a>     
            </li>
        </ul>
    </React.Fragment>
};

export default Links