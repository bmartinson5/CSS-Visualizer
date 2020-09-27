import React, { Fragment, useState } from 'react';
import '../App.css';


function Selection({
  changeSelection,
  selectionState,
}) {

  const handleChangeElements = (attr, newValue) => {
    if (newValue >= 1) {
      changeSelection(attr, newValue)
    }
  }

  return (
    <Fragment>
      <section className="co-navbar">
        <div className='flexbox-selection'>
          <div className='co-input-selection'>
            Elements
            <input 
              type='number' 
              value={selectionState.elements}
              onChange={(e) => handleChangeElements('elements', e.target.value)}
            />
          </div>

          <div className='co-input-selection'>
            Margin
            <input 
              type='number' 
              value={selectionState.margin}
              onChange={(e) => handleChangeElements('margin', e.target.value)}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Selection;

