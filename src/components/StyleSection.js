import React, { Fragment, useState } from 'react';
import '../App.css';

function StyleSection({
  header,
  options,
  selectionState,
  selectionType,
  selectionTypeName,
  changeStyling,
  changeSelection,
}) {
  const currentStyle = selectionState[selectionTypeName];
  const currentStyleValue = selectionState[selectionType][currentStyle];
  console.log({ selectionState, currentStyleValue });

  const buildOptions = () => {
    return options.map((optionName) => {
      return (
        <option value={optionName}>{optionName}</option>
      );
    });
  };

  return (
    <Fragment>
      <div className='style-selection-container'>
        <div className='style-selection-header'>
          {header}
        </div>
        <div className='co-input-selection'>
          <select
            name='styling'
            value={currentStyle}
            onChange={(e) => changeSelection(selectionTypeName, e.target.value)}
          >
            {buildOptions()}
          </select>
          <input
            type='text'
            value={currentStyleValue}
            onChange={(e) => changeStyling(currentStyle, e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default StyleSection;
