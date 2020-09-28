import React, { Fragment, useReducer, useState } from 'react';
import './App.css';

import Selection from './components/Selection'
import SelectionDisplay from './components/SelectionDisplay'
import Header from './components/Header'
import { act } from 'react-dom/test-utils';

const defaultSelectionState = {
  elements: 3,
  currentStyleSelected: 'margin',
  styling: {
    margin: '30px',
    height: '100px',
  }
}

function selectionReducer(state = defaultSelectionState, action) {
  console.log({action})
  switch (action.type) {
    case 'update': 
      return {
        ...state,
        styling: {
          ...state.styling,
        },
        [action.attribute]: action.value,
      }
    case 'updateStyling': 
      return {
        ...state,
        styling: {
          [action.attribute]:action.value,
        },
      }
    default: 
      return state
  }
}

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);

  const handleChangeSelection = (attribute, value) => {
    dispatch({type:'update', attribute, value})
  }

  const handleChangeStyling = (attribute, value) => {
    dispatch({type:'updateStyling', attribute, value})
  }

  return (
    <Fragment>
      <Header />
      <main className="co-dashboard">
        <Selection 
          selectionState={selectionState} 
          changeSelection={handleChangeSelection}
          changeStyling={handleChangeStyling}
        />
        <SelectionDisplay selectionState={selectionState}/>
      </main>
    </Fragment>
  );
}

export default App;
