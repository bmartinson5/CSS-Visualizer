import React, { Fragment, useState } from 'react';
import '../css/selection.css';
import classNames from 'classnames';

import StyleSection from './StyleSection';
import { ReactComponent as PlusIcon } from '../images/plus.svg';


function Codebox({
  elementStyles,
  containerStyles,
  changeSelection,
  changeElementStyles,
  changeContainerStyles,
  selectionState,
}) {

  const { selectedElement, selectedStyleType } = selectionState;

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
      {buildSelectionHeaders(['code', 'selection'], 'selectedCssType', typeClasses)}

      <div className='style-selection-container'></div>
    </Fragment>
  );
}

export default Codebox;
