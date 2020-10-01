import React, { Fragment, useState } from 'react';
import '../App.css';
import classNames from 'classnames';

import StyleSection from './StyleSection';


function Selection({
  changeSelection,
  changeStyling,
  selectionState,
}) {

  const { selectedStyleType, elements } = selectionState;

  const handleChangeElements = (attr, newValue, isNumber) => {
    if (!isNumber || newValue >= 1) {
      changeSelection(attr, newValue);
    }
  };

  const buildStyleSections = () => {
    let selectionType = 'containerStyling';
    if (selectedStyleType === 'Elements') {
      selectionType = 'styling';
    }

    return (
      <StyleSection
        selectionState={selectionState}
        selectionType={selectionType}
        changeStyling={changeStyling}
      />
    );
  };


  const buildSelectionHeaders = (headers, identifier) => {
    return headers.map((header) => {
      const stylesClasses = classNames({
        'layout-selection': true,
        'layout-selected': header === selectionState[identifier],
      });
      return (
        <div
          className={stylesClasses}
          onClick={() => changeSelection(identifier, header)}
        >
          {header}
        </div>
      );
    });
  };

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
              value={elements}
              onChange={(e) => handleChangeElements('elements', e.target.value, true)}
            />
          </div>

        </div>

        <div className='layout-selection-container'>
          {buildSelectionHeaders(['Container', 'Elements'], 'selectedStyleType')}
        </div>
        <div className='selection-container'>
          {buildStyleSections()}
        </div>

      </section>
    </Fragment>
  );
}

export default Selection;

