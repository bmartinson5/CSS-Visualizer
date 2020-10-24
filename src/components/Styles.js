import React, { Fragment, useState } from 'react';
import '../css/selection.css';
import classNames from 'classnames';

import StyleSection from './StyleSection';
import { ReactComponent as PlusIcon } from '../images/plus.svg';


function Styles({
  elementStyles,
  changeSelection,
  changeElementStyles,
  selectionState,
}) {

  const { selectedStyleType } = selectionState;

  const layoutClasses = {
    selection: 'layout-selection',
    selected: 'layout-selected',
    container: 'layout-selection-container',
  };

  const typeClasses = {
    selection: 'type-selection',
    selected: 'type-selected',
    container: 'type-selection-container',
  };

  const buildSelectionHeaders = (headers, selectionType, classes) => {
    const content = headers.map((header, i) => {
      const stylesClasses = classNames({
        [classes.selection]: true,
        [classes.selected]: header === selectionState[selectionType],
      });
      return (
        <div
          className={stylesClasses}
          onClick={() => changeSelection(selectionType, header)}
          key={i}
        >
          {header}
        </div>
      );
    });

    return (
      <div className={classes.container}>
        {content}
      </div>
    );
  };


  return (
    <Fragment>
      {/* <div className='add-element-container'>
          <button
            className='selection-button'
            onClick={handleAddElement}
          >
            <PlusIcon />
            Add Element
          </button>

        </div> */}
      {buildSelectionHeaders(['code', 'selection'], 'selectedCssType', typeClasses)}

      <StyleSection
        headerNote='Change css for the selected element'
        options={elementStyles}
        changeStyling={changeElementStyles}
      />

    </Fragment>
  );
}

export default Styles;

