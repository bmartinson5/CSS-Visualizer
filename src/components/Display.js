import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../css/selectionDisplay.css';
import { defaultContainerStyles, flexboxContainerStyles } from '../utilities/objects';
import { ReactComponent as PlusIcon } from '../images/plus.svg';

function Display({
  selectionState,
  changeSelection,
  elementStyles,
}) {


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
          <PlusIcon />
          Your text
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className='display-container'>
        {buildPage()}

      </div>
    </Fragment>
  );
}

export default Display;
