import React, { Fragment, useState } from 'react';
import '../css/selection.css';
import classNames from 'classnames';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';

import StyleSection from './StyleSection';
import { ReactComponent as PlusIcon } from '../images/plus.svg';

import { defaultCss } from '../utilities/objects';

import 'ace-builds/src-noconflict/theme-solarized_light';
function Codebox({
  elementStyles,
  changeSelection,
  changeElementStyles,
  changeContainerStyles,
  selectionState,
}) {

  return (
    <Fragment>
      <AceEditor
        mode='css'
        theme='solarized_light'
        value={defaultCss}
        height='50%'
        width='100%'
        style={{ height: '100%' }}
        showPrintMargin={false}
        autoScrollEditorIntoView={true}
      />
    </Fragment>
  );
}

export default Codebox;
