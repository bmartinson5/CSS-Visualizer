import React, { Fragment, useState } from 'react';
import '../css/elements.css';
import classNames from 'classnames';

function ElementTypesList({
  selectionState,
  changeSelection,
  elementStyles,
}) {


  const buildList = () => {
    const listContent = [];

    Object.keys(elementStyles).forEach((elementType) => {
      const isSelected = selectionState.elementType === elementType;
      const itemClasses = classNames({
        'typesList-item': true,
        'typesList-item--selected': isSelected,
      });
      const headerClasses = classNames({
        'typesList-header': true,
        'typesList-header--selected': isSelected,
      });

      listContent.push(
        <div className={itemClasses}>
          <h3 className={headerClasses} onClick={() => changeSelection(elementType)}>
            {elementType}
          </h3>
        </div>,
      );
    });
    return (
      <div
        className='typesList-container'
      >
        {listContent}
      </div>
    );
  };
  return (
    <section className='typesList-main'>
      {buildList()}
    </section>
  );
}

export default ElementTypesList;
