import React, { Fragment, useState } from 'react';
import '../App.css';

function SelectionDisplay({
  selectionState,
}) {

  const buildPage = () => {
    let elements = [];
    for (let x = 0; x < selectionState.elements; ++x) {
      elements.push(
        <div 
          className='element' 
          style={{
            '--margin': `${selectionState.margin}px`,
          }}
        >
          {x+1}
        </div>
      )
    }
    return (
      <div className='elements-container'>
        {elements}
      </div>
    );
  }

  return (
    <Fragment>
      <section className="co-mainPage">
        {buildPage()}
      </section>
    </Fragment>
  );
}

export default SelectionDisplay;
