import React, { Fragment, useState } from 'react';
import '../css/styleSection.css';

function StyleSection({
  headerNote,
  options,
  changeStyling,
}) {

  const buildOptions = () => {
    if (!options) {
      return null;
    }

    return Object.entries(options).map(([styleName, styleValue]) => {
      return (
        // eslint-disable-next-line react/jsx-key
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
        <div className='style-selection-header'>
          * {headerNote}
        </div>
        {buildOptions()}
      </div>
    </Fragment>
  );
}

export default StyleSection;
