import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../App.css';

function SelectionDisplay({
  selectionState,
  changeSelection,
  elementStyles,
  containerStyles,
}) {
  const { selectedElement, selectedContainer, elements } = selectionState;

  const buildPage = () => {
    const content = [];
    for (let x = 0; x < elements; ++x) {
      const isSelected = selectedElement === x;
      const elementClasses = classNames({
        element: true,
        'selected-element': isSelected,
      });

      content.push(
        <div
          className={elementClasses}
          style={elementStyles[x]}
          onClick={() => changeSelection('selectedElement', x)}
        >

        </div>,
      );
    }
    return (
      <div
        className='elements-container'
        style={containerStyles[selectedContainer]}
      >
        {content}
      </div>
    );
  };

  return (
    <Fragment>
      <section className='co-mainPage'>
        {buildPage()}
      </section>
    </Fragment>
  );
}

export default SelectionDisplay;
