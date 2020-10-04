import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './App.css';

import { defaultContainerStyles, defaultElementStyles, defaultSelectionState, updateState } from './utilities/objects';

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
  console.log({ action });
  const { elementId, styleName, value } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${elementId}.${styleName}`, value);
    default:
      return state;
  }
}

function elementContainerStylesReducer(state, action) {
  console.log({ action });
  const { elementId, styleName, value } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${elementId}.${styleName}`, value);
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
  const [elementStyles, dispatchElementStyles] = useReducer(elementStylesReducer, createDefaultStyles(3, defaultElementStyles));
  const [containerStyles, dispatchContainerStyles] = useReducer(elementContainerStylesReducer, createDefaultStyles(3, defaultContainerStyles));

  const handleChangeStyles = (type, name, value) => {
    if (type === 'container') {
      dispatchContainerStyles({ type: 'update', elementId: selectionState.selectedContainer, styleName: name, value });
      return;
    }

    dispatchElementStyles({ type: 'update', elementId: selectionState.selectedElement, styleName: name, value });
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
          changeElementStyles={handleChangeStyles.bind(null, 'element')}
          changeContainerStyles={handleChangeStyles.bind(null, 'container')}
          elementStyles={elementStyles}
          containerStyles={containerStyles}
        />
        <SelectionDisplay
          selectionState={selectionState}
          changeSelection={handleChange.bind(null, 'update')}
          elementStyles={elementStyles}
          containerStyles={containerStyles}
        />
      </main>
    </Fragment>
  );
}

export default App;
