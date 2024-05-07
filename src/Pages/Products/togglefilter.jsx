import React, { useState } from 'react';
import './products.css';

const ToggleFilter = ({ title, options, filters, onFilterChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
  };

  const handleFilterSelect = option => {
    const isSelected = selectedOptions.includes(option);
    let updatedOptions;

    if (isSelected) {
      updatedOptions = selectedOptions.filter(item => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedOptions);
    const updatedFilters = { ...filters, [title]: updatedOptions };
    console.log(updatedFilters)
    onFilterChange(updatedFilters);
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
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleFilterSelect(option)}
                />
                <label htmlFor={option}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleFilter;
