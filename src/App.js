import React, { Fragment, useReducer, useState } from 'react';
import './App.css';

import Selection from './components/Selection'
import SelectionDisplay from './components/SelectionDisplay'
import Header from './components/Header'

const defaultSelectionState = {
  elements: 3,
  margin: 30,
}

function selectionReducer(state = defaultSelectionState, action) {
  console.log({action})
  switch (action.type) {
    case 'update': 
      return {
        ...state,
        [action.attribute]: action.value,
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

  return (
    <Fragment>
      <Header />
      <main className="co-dashboard">
        <Selection selectionState={selectionState} changeSelection={handleChangeSelection}/>
        <SelectionDisplay selectionState={selectionState}/>
      </main>
    </Fragment>
  );
}

export default App;
