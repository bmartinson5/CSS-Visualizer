import React, { Fragment, useState } from 'react';
import '../App.css';
import classNames from 'classnames';

import StyleSection from './StyleSection';


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

  // const buildStyleSections = () => {
  //     return (
  //       <StyleSection
  //         options={containerStyles[selectedContainer]}
  //         changeStyling={changeContainerStyles}
  //       />
  //     );
  //   }

  //   return (
  //     <StyleSection
  //       options={elementStyles[selectedElement]}
  //       changeStyling={changeElementStyles}
  //     />
  //   );
  // };


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

        {/* <div className='layout-selection-container'>
          Container Styles
        </div>
        <div className='selection-container'>
          <StyleSection
            options={containerStyles[selectedContainer]}
            changeStyling={changeContainerStyles}
          />
        </div> */}

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

