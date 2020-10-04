import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../css/selectionDisplay.css';
import { defaultContainerStyles } from '../utilities/objects';

function SelectionDisplay({
  selectionState,
  changeSelection,
  elementStyles,
}) {
  const { selectedElement, elements } = selectionState;

  const getStyles = (elementId) => {
    const arrOfObjs = Object.values(elementStyles[elementId]);
    const stylesObj = Object.assign({}, ...arrOfObjs);
    Object.keys(stylesObj).forEach((key) => {
      if (!stylesObj[key]) {
        delete stylesObj[key];
      }
    });
    return stylesObj;
  };

  const buildPage = () => {
    const content = [];
    for (let x = 0; x < elements; ++x) {
      const styles = getStyles(x);
      const isSelected = selectedElement === x;
      const elementClasses = classNames({
        element: true,
        'selected-element': isSelected,
      });

      content.push(
        <div
          className={elementClasses}
          style={styles}
          onClick={() => changeSelection('selectedElement', x)}
        >

        </div>,
      );
    }
    return (
      <div
        className='elements-container'
        style={defaultContainerStyles}
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
