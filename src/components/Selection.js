import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import '../css/selectionPage.css';

function Selection({
  selectionState,
  changeSelection,
  elementStyles,
}) {


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
      <section className='selection-page'>
        {buildPage()}
      </section>
    </Fragment>
  );
}

export default Selection;
