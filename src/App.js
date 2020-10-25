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
  const { styleName, value, styleType } = action;
  switch (action.type) {
    case 'update':
      return updateState(state, `${styleType}.${styleName}`, value);
    default:
      return state;
  }
}

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);
  const [allElementStyles, dispatchElementStyles] = useReducer(elementStylesReducer, stylesObject);

  const handleChangeElementStyles = (styleType, styleName, value) => {
    dispatchElementStyles({
      type: 'update',
      styleName,
      styleType,
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
        <ElementTypesList
          selectionState={selectionState}
          elementStyles={allElementStyles}
          changeSelection={handleChange.bind(null, 'update', 'elementType')}
        />
        <ElementsList
          selectionState={selectionState}
          elementStyles={allElementStyles}
        />
        <div className='selection-display-container'>
          <Selection
            selectionState={selectionState}
            changeSelection={handleChange.bind(null, 'update')}
            changeElementStyles={handleChangeElementStyles.bind(null, selectionState.elementType)}
            elementStyles={allElementStyles[selectionState.elementType][selectionState.selectedElement]}
          />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
