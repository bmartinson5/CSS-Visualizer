import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../css/selectionDisplay.css';
import { defaultContainerStyles, flexboxContainerStyles } from '../utilities/objects';

function Display({
  selectionState,
  changeSelection,
  elementStyles,
}) {


  // const getStyles = (elementId) => {
  //   const arrOfObjs = Object.values(elementStyles[elementId]);
  //   const stylesObj = Object.assign({}, ...arrOfObjs);
  //   Object.keys(stylesObj).forEach((key) => {
  //     //delete empty styles
  //     if (!stylesObj[key]) {
  //       delete stylesObj[key];
  //     }
  //   });
  //   return stylesObj;
  // };

  const buildPage = () => {
    const elementClasses = classNames({
      element: true,
    });

    return (
      <div
        className='elements-container'
      >
        <div
          className={elementClasses}
          style={elementStyles}
        >
          Your text
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div
        className='co-mainPage'
      >
        {buildPage()}
      </div>
    </Fragment>
  );
}

export default Display;
