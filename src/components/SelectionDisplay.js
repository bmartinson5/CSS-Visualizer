import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../App.css';

function SelectionDisplay({
  selectionState,
  changeSelection,
}) {
  const { selectedElements } = selectionState;

  const getNewSelectedElements = (numberClicked) => {
    if (selectedElements.includes(numberClicked)) {
      return selectedElements.filter((elementNumber) => {
        return elementNumber !== numberClicked;
      });
    }

    return [...selectedElements, numberClicked];
  };

  const buildPage = () => {
    const elements = [];
    console.log({ selectedElements });
    for (let x = 0; x < selectionState.elements; ++x) {
      const elementClasses = classNames({
        element: true,
        'selected-element': selectionState.selectedElements.includes(x),
      });

      elements.push(
        <div
          className={elementClasses}
          style={selectionState.styling}
          onClick={() => changeSelection('selectedElements', getNewSelectedElements(x))}
        >

        </div>,
      );
    }
    return (
      <div className='elements-container' style={selectionState.containerStyling}>
        {elements}
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
