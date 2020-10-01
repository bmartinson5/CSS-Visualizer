import React, { Fragment, useState } from 'react';
import '../App.css';

function SelectionDisplay({
  selectionState,
}) {

  const buildPage = () => {
    const elements = [];
    for (let x = 0; x < selectionState.elements; ++x) {
      elements.push(
        <div
          className='element'
          style={selectionState.styling}
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
