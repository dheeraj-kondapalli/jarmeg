// ToggleFilter.js
import React, { useState } from 'react';
import './products.css'

const ToggleFilter = ({ title, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
  };

  return (
    <div className="filterboxheader">
      <button className='b' onClick={handleToggleOptions}>
        <p>{title}</p>
        {showOptions ? <p>-</p> : <p>+</p>}
      </button>
      <hr />
      {showOptions && (
        <div className="filterbody">
          <ul className="values">
            {options.map(option => (
              <li className='optionbox' key={option}>
                <input type="checkbox" id={option}/>
                <label for={option}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleFilter;
