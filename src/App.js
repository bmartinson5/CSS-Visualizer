import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './css/App.css';

import { defaultNumberOfElements, defaultElementStyles, defaultSelectionState, updateState, flexboxContainerStyles } from './utilities/objects';

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

function containerStylesReducer(state, action) {
  const { styleName, value } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${styleName}`, value);
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
  const [containerStyles, dispatchContainerStyles] = useReducer(containerStylesReducer, flexboxContainerStyles);

  const handleChangeElementStyles = (name, value) => {
    dispatchElementStyles({
      type: 'update',
      elementId: selectionState.selectedElement,
      styleType: selectionState.selectedStyleType,
      styleName: name,
      value,
    });
  };

  const handleChangeContainerStyles = (name, value) => {
    dispatchContainerStyles({
      type: 'update',
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
          changeElementStyles={handleChangeElementStyles}
          changeContainerStyles={handleChangeContainerStyles}
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
