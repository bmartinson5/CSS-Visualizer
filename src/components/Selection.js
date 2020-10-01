import React, { Fragment, useState } from 'react';
import '../App.css';
import StyleSection from './StyleSection';


function getStyleValue(style) {
  let unitOfMeasurement = 'px';
  if (style.includes('%')) {
    unitOfMeasurement = '%';
  }

  return {
    number: style.split(unitOfMeasurement)[0],
    unit: unitOfMeasurement,
  };
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
  changeContainerStyling,
  selectionState,
}) {


  const currentStyle = selectionState.selectedStyle;
  const currentContainerStyle = selectionState.selectedContainerStyle;
  const currentStyleValues = getStyleValue(selectionState.styling[currentStyle]);
  const currentContainerStyleValue = selectionState.containerStyling[currentContainerStyle];

  const handleChangeElements = (attr, newValue, isNumber) => {
    if (!isNumber || newValue >= 1) {
      changeSelection(attr, newValue);
    }
  };

  const handleChangeStyling = (newValueNumber, unit) => {
    if ((unit === 'px' && isValidPxSize(newValueNumber)) ||
        (unit === '%' && isValidPecentage(newValueNumber))) {
      const newValue = newValueNumber.toString() + unit;
      changeStyling(currentStyle, newValue);
    }
  };

  const containerOptions = [
    'flex-direction',
    'justify-content',
    'flex-flow',
  ];

  return (
    <Fragment>
      <section className='co-navbar'>
        <div className='layout-selection-container'>
          <div className='layout-selection layout-selected'>
            Flexbox
          </div>
          <div className='layout-selection'>
            Grid
          </div>
        </div>
        <div className='selection-container'>
          <div className='co-input-selection'>
            <label>
              # of Elements
            </label>
            <input
              type='number'
              value={selectionState.elements}
              onChange={(e) => handleChangeElements('elements', e.target.value, true)}
            />
          </div>

          <StyleSection
            header='Container Styles'
            options={containerOptions}
            selectionState={selectionState}
            selectionTypeName='selectedContainerStyle'
            selectionType='containerStyling'
            changeSelection={changeSelection}
            changeStyling={changeContainerStyling}
          />


          <div className='style-selection-container'>
            <div className='style-selection-header'>
              Element Styles
            </div>
            <div className='co-input-selection'>
              <select
                name='styling'
                value={currentStyle}
                onChange={(e) => handleChangeElements('selectedStyle', e.target.value)}
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
                  onChange={() => handleChangeStyling(30, 'px')}
                />
              px
              </label>
              <label>
                <input
                  type='radio'
                  checked={currentStyleValues.unit === '%'}
                  onChange={() => handleChangeStyling(5, '%')}
                />
              %
              </label>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Selection;

