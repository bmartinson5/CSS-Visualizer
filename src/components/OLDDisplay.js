import React, { Fragment, useState } from 'react';
import '../css/selectionDisplay.css';
import { defaultContainerStyles, flexboxContainerStyles } from '../utilities/objects';

function OLDDisplay({
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
    return (
      <div
        className='elements-container'
      >

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

export default OLDDisplay;
