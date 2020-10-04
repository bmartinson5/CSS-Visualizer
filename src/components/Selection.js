import React, { Fragment, useState } from 'react';
import '../App.css';
import classNames from 'classnames';

import StyleSection from './StyleSection';
import { ReactComponent as PlusIcon } from '../images/plus.svg';


function Selection({
  elementStyles,
  containerStyles,
  changeSelection,
  changeElementStyles,
  changeContainerStyles,
  selectionState,
}) {

  const { elements, selectedElement, selectedContainer, selectedStyleType } = selectionState;

  const handleChangeElements = (attr, newValue, isNumber) => {
    if (!isNumber || newValue >= 1) {
      changeSelection(attr, newValue);
    }
  };

  const handleAddElement = () => {

  };

  const buildSelectionHeaders = (headers) => {
    return headers.map((header) => {
      const stylesClasses = classNames({
        'layout-selection': true,
        'layout-selected': header === selectionState.selectedStyleType,
      });
      return (
        <div
          className={stylesClasses}
          onClick={() => changeSelection('selectedStyleType', header)}
        >
          {header}
        </div>
      );
    });
  };


  return (
    <Fragment>
      <section className='co-navbar'>
        <div className='add-element-container'>
          <button
            className='selection-button'
            onClick={handleAddElement}
          >
            <PlusIcon />
            Add Element
          </button>

        </div>

        <div className='styles-section-header'>
          Styles
        </div>
        <div className='layout-selection-container'>
          {buildSelectionHeaders(['format', 'background', 'box-model'])}
        </div>
        <div className='layout-selection-container'>
          {buildSelectionHeaders(['text', 'content', 'misc'])}
        </div>
        <div className='selection-container'>
          <StyleSection
            options={elementStyles[selectedElement][selectedStyleType]}
            changeStyling={changeElementStyles}
          />
        </div>

      </section>
    </Fragment>
  );
}

export default Selection;

