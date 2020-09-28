import React, { Fragment, useState } from 'react';
import '../App.css';


function getStyleValue(style) {
  let unitOfMeasurement = 'px';
  if (style.includes('%')) {
    unitOfMeasurement = '%';
  }
  
  return {
    number: style.split(unitOfMeasurement)[0],
    unit: unitOfMeasurement,
  }
}

function isValidPecentage(number) {
  return number >= 0 && number <= 100;
}

function isValidPxSize(number) {
  return number >= 0;
}

function Selection({
  changeSelection,
  changeStyling,
  selectionState,
}) {


  const currentStyle = selectionState.currentStyleSelected;
  const currentStyleValues = getStyleValue(selectionState.styling[currentStyle]);

  const handleChangeElements = (attr, newValue, isNumber) => {
    if (!isNumber || newValue >= 1) {
      console.log({attr, newValue})
      changeSelection(attr, newValue)
    }
  }

  const handleChangeStyling = (newValueNumber, unit) => {

    if ((unit === 'px' && isValidPxSize(newValueNumber)) || 
        (unit === '%' && isValidPecentage(newValueNumber)) ) {
      const newValue = newValueNumber.toString() + unit;
      changeStyling(currentStyle, newValue)
    }
  }

  return (
    <Fragment>
      <section className="co-navbar">
        <div className='flexbox-selection'>
          <div className='co-input-selection'>
            Elements
            <input 
              type='number' 
              value={selectionState.elements}
              onChange={(e) => handleChangeElements('elements', e.target.value, true)}
            />
          </div>

          <div className='co-input-selection'>
            Styling
            <select
              name='styling' 
              value={currentStyle}
              onChange={(e) => handleChangeElements('styling', e.target.value)}
            >
              <option value='margin'>Margin</option>
              <option value='height'>Height</option>
            </select>
            <input 
              type='number' 
              value={currentStyleValues.number}
              onChange={(e) => handleChangeStyling(e.target.value, currentStyleValues.unit)}
            /> 
            <label>
              <input 
                type='radio' 
                checked={currentStyleValues.unit === 'px'}
                onChange={(e) => handleChangeStyling(currentStyleValues.number, 'px')}
              />
              px
            </label>
            <label>
              <input 
                type='radio' 
                checked={currentStyleValues.unit === '%'}
                onChange={(e) => handleChangeStyling(currentStyleValues.number, '%')}
              />
              %
            </label>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Selection;

