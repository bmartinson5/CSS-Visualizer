import React, { Fragment, useState } from 'react';
import '../App.css';

function StyleSection({
  header,
  selectionState,
  selectionType,
  changeStyling,
}) {
  const options = selectionState[selectionType];

  const buildOptions = () => {

    return Object.entries(options).map(([styleName, styleValue]) => {
      return (
        <div className='style-option'>
          <div className='style-option-name'>
            {styleName}
          </div>
          <div className='style-option-value'>
            <input
              type='text'
              value={styleValue}
              onChange={(e) => changeStyling(styleName, e.target.value)}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className='style-selection-container'>
        {buildOptions()}
      </div>
    </Fragment>
  );
}

export default StyleSection;
