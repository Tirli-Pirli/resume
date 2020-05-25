import React from 'react';

function SelectLanguage({onChange}) {
   
    return (
        <select onChange={onChange}>
        <option value="lt">Lietuviu</option>
        <option value="en">English</option>
      </select>
    )
}
export default SelectLanguage