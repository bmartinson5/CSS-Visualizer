import React, { Fragment, useState } from 'react';
import '../css/selection.css';
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

  const { selectedElement, selectedStyleType } = selectionState;

  const handleAddElement = () => {

  };

  const buildSelectionHeaders = (headers, selectionType) => {
    return headers.map((header) => {
      const stylesClasses = classNames({
        'layout-selection': true,
        'layout-selected': header === selectionState[selectionType],
      });
      return (
        <div
          className={stylesClasses}
          onClick={() => changeSelection(selectionType, header)}
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
          Presets 
        </div>
        <div className='layout-selection-container'>
          {buildSelectionHeaders(['flexbox', 'form', 'blank'], 'selectedPresetType')}
        </div>
        <StyleSection
          headerNote='Change css for the container'
          options={containerStyles}
          changeStyling={changeContainerStyles}
        />


        <div className='styles-section-header'>
          Element Styles
        </div>
        <div className='layout-selection-container'>
          {buildSelectionHeaders(['format', 'background', 'box-model'], 'selectedStyleType')}
        </div>
        <div className='layout-selection-container'>
          {buildSelectionHeaders(['text', 'content', 'misc'], 'selectedStyleType')}
        </div>
        <StyleSection
          headerNote='Change css for the selected element'
          options={elementStyles[selectedElement][selectedStyleType]}
          changeStyling={changeElementStyles}
        />

      </section>
    </Fragment>
  );
}

export default Selection;

