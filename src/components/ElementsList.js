import React, { Fragment, useState } from 'react';
import '../css/elements.css';
import classNames from 'classnames';

function ElementList({
  selectionState,
  changeSelection,
  allElementStyles,
}) {

  const buildList = () => {
    const listContent = [];
    const typeStyles = allElementStyles[selectionState.elementType];
    Object.entries(typeStyles).forEach(([elementName, elementStyles]) => {
      const isSelected = selectionState.selectedElement === elementName;
      const itemClasses = classNames({
        'elementsList-item': true,
        'elementsList-item--selected': isSelected,
      });
      listContent.push(
        <div className={itemClasses} onClick={() => changeSelection(elementName)}>
          <div style={elementStyles} >

          </div>
        </div>,
      );
    });

    return (
      <div
        className='elementsList-container'
      >
        {listContent}
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
