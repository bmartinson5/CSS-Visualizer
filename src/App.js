import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './css/App.css';

import { buttonStyles, defaultElementStyles, defaultSelectionState, stylesObject, updateState } from './utilities/objects';

import Styles from './components/Styles';
import ElementTypesList from './components/ElementTypesList';
import ElementsList from './components/ElementsList';
import Selection from './components/Selection';
import Header from './components/Header';
import Codebox from './components/Codebox';


function selectionReducer(state = defaultSelectionState, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.attribute]: action.value,
      };
    default:
      return state;
  }
}

function elementStylesReducer(state, action) {
  const { styleName, value, elementType, elementName } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${elementType}.${elementName}.${styleName}`, value);
    default:
      return state;
  }
}

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);
  const [allElementStyles, dispatchElementStyles] = useReducer(elementStylesReducer, stylesObject);

  const handleChangeElementStyles = (styleName, value) => {
    dispatchElementStyles({
      type: 'update',
      styleName,
      elementName: selectionState.selectedElement,
      elementType: selectionState.elementType,
      value,
    });
  };

  const handleChange = (type, attribute, value) => {
    dispatch({ type, attribute, value });
  };

  const selectedElementStyles = allElementStyles[selectionState.elementType][selectionState.selectedElement];

  return (
    <Fragment>
      <Header />
      <main className='co-dashboard'>
        <ElementTypesList
          selectionState={selectionState}
          elementStyles={allElementStyles}
          changeSelection={handleChange.bind(null, 'update', 'elementType')}
        />
        <ElementsList
          selectionState={selectionState}
          allElementStyles={allElementStyles}
          changeSelection={handleChange.bind(null, 'update', 'selectedElement')}
        />
        <div className='selection-display-container'>
          <Selection
            selectionState={selectionState}
            changeSelection={handleChange.bind(null, 'update')}
            changeElementStyles={handleChangeElementStyles}
            elementStyles={selectedElementStyles}
          />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
