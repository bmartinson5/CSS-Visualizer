import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../css/selectionPage.css';
import StyleSection from './StyleSection';
import Codebox from './Codebox';
import Display from './Display';

function Selection({
  selectionState,
  changeSelection,
  changeElementStyles,
  elementStyles,
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

  const buildCodebox = () => {
    if (selectionState.selectedCssType === 'inputs') {
      return (
        <StyleSection
          headerNote='Change css for the selected element'
          options={elementStyles}
          changeStyling={changeElementStyles}
        />
      );
    }
    return (
      <Codebox
        selectionState={selectionState}
        changeSelection={changeSelection}
        changeElementStyles={changeElementStyles}
        elementStyles={elementStyles}
      />
    );
  };

  const buildPage = () => {
    return (
      <div
        className='selection-container'
      >
        <div className='selection-topHalf'>
          <Display
            selectionState={selectionState}
            changeSelection={changeSelection}
            elementStyles={elementStyles}
          />
        </div>
        <div className='selection-bottomHalf'>
          <div className='selection-inputs'>
            {buildSelectionHeaders(['css', 'inputs'], 'selectedCssType', typeClasses)}
            {buildCodebox()}
          </div>
          <div className='selection-inputs2'>

          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <section className='selection-page'>
        {buildPage()}
      </section>
    </Fragment>
  );
}

export default Selection;
