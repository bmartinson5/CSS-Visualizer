import React, { Fragment, useState } from 'react';
import '../css/header.css';
import { ReactComponent as MountainIcon } from '../images/mountains.svg';


function App() {
  return (
    <Fragment>
      <header className='co-header'>
        <div className='header-title'>
          <div className='header-icon'>
            <MountainIcon />
          </div>
          Cascades
        </div>
      </header >
    </Fragment>
  );
}

export default App;
