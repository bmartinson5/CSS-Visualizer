import React, { Fragment, useState } from 'react';
import '../css/elements.css';

function ElementList({
  selectionState,
  changeSelection,
  elementStyles,
}) {


  const buildList = () => {
    const listContent = [];


    return (
      <div
        className='typesList-container'
      >
      </div>
    );
  };
  return (
    <section className='elementsList-main'>
      {buildList()}
    </section>
  );
}

export default ElementList;
