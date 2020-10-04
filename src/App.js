import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './css/selection.css';

import { defaultNumberOfElements, defaultElementStyles, defaultSelectionState, updateState } from './utilities/objects';

import Selection from './components/Selection';
import SelectionDisplay from './components/SelectionDisplay';
import Header from './components/Header';


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
  const { elementId, styleName, value, styleType } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${elementId}.${styleType}.${styleName}`, value);
    default:
      return state;
  }
}

function createDefaultStyles(numOfElements, defaultStyles) {
  const defaultObject = {};
  for (let x = 0; x < numOfElements; ++x) {
    defaultObject[x] = defaultStyles;
  }
  return defaultObject;
}

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);
  const [elementStyles, dispatchElementStyles] = useReducer(elementStylesReducer, createDefaultStyles(defaultNumberOfElements, defaultElementStyles));

  const handleChangeStyles = (name, value) => {
    dispatchElementStyles({
      type: 'update',
      elementId: selectionState.selectedElement,
      styleType: selectionState.selectedStyleType,
      styleName: name,
      value,
    });
  };

  const handleChange = (type, attribute, value) => {
    dispatch({ type, attribute, value });
  };

  return (
    <Fragment>
      <Header />
      <main className='co-dashboard'>
        <Selection
          selectionState={selectionState}
          changeSelection={handleChange.bind(null, 'update')}
          changeElementStyles={handleChangeStyles}
          elementStyles={elementStyles}
        />
        <SelectionDisplay
          selectionState={selectionState}
          changeSelection={handleChange.bind(null, 'update')}
          elementStyles={elementStyles}
        />
      </main>
    </Fragment>
  );
}

export default App;
