import React, { Fragment, useEffect, useReducer, useState } from 'react';
import './css/App.css';

import { buttonStyles, defaultElementStyles, defaultSelectionState, updateState } from './utilities/objects';

import Styles from './components/Styles';
import Display from './components/Display';
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
      return updateState(state, `${styleName}`, value);
    default:
      return state;
  }
}

// function containerStylesReducer(state, action) {
//   const { styleName, value } = action;
//   switch (action.type) {
//     case 'update':
//       return updateState(state, `${styleName}`, value);
//     default:
//       return state;
//   }
// }

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);
  const [elementStyles, dispatchElementStyles] = useReducer(elementStylesReducer, buttonStyles);

  const handleChangeElementStyles = (name, value) => {
    dispatchElementStyles({
      type: 'update',
      styleName: name,
      value,
    });
  };

  // const handleChangeContainerStyles = (name, value) => {
  //   dispatchContainerStyles({
  //     type: 'update',
  //     styleName: name,
  //     value,
  //   });
  // };

  const handleChange = (type, attribute, value) => {
    dispatch({ type, attribute, value });
  };

  const buildSelectionSection = () => {
    if (selectionState.selectedCssType === 'selection') {
      return (
        <Styles
          selectionState={selectionState}
          changeSelection={handleChange.bind(null, 'update')}
          changeElementStyles={handleChangeElementStyles}
          elementStyles={elementStyles}
        />
      );
    }
    return (
      <Codebox
        selectionState={selectionState}
        changeSelection={handleChange.bind(null, 'update')}
        changeElementStyles={handleChangeElementStyles}
        elementStyles={elementStyles}
      />
    );

  };

  return (
    <Fragment>
      <Header />
      <main className='co-dashboard'>
        <section className='co-navbar'>
          {buildSelectionSection()}
        </section>
        <div className='selection-display-container'>
          <Display
            selectionState={selectionState}
            changeSelection={handleChange.bind(null, 'update')}
            elementStyles={elementStyles}
          />
          <Selection
            selectionState={selectionState}
            changeSelection={handleChange.bind(null, 'update')}
            elementStyles={elementStyles}
          />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
