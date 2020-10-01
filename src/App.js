import React, { Fragment, useReducer, useState } from 'react';
import './App.css';

import Selection from './components/Selection';
import SelectionDisplay from './components/SelectionDisplay';
import Header from './components/Header';

const defaultSelectionState = {
  elements: 3,
  selectedStyle: 'margin',
  selectedContainerStyle: 'flex-direction',
  styling: {
    margin: '30px',
    height: '100px',
  },
  containerStyling: {
    'flex-direction': 'row',
  },
};

function selectionReducer(state = defaultSelectionState, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.attribute]: action.value,
        styling: {
          ...state.styling,
        },
        containerStyling: {
          ...state.containerStyling,
        },
      };
    case 'updateStyling':
      return {
        ...state,
        styling: {
          ...state.styling,
          [action.attribute]: action.value,
        },
        containerStyling: {
          ...state.containerStyling,
        },
      };
    case 'updateContainerStyling':
      return {
        ...state,
        styling: {
          ...state.styling,
        },
        containerStyling: {
          ...state.containerStyling,
          [action.attribute]: action.value,
        },
      };
    default:
      return state;
  }
}

function App() {
  const [selectionState, dispatch] = useReducer(selectionReducer, defaultSelectionState);

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
          changeStyling={handleChange.bind(null, 'updateStyling')}
          changeContainerStyling={handleChange.bind(null, 'updateContainerStyling')}
        />
        <SelectionDisplay selectionState={selectionState}/>
      </main>
    </Fragment>
  );
}

export default App;
