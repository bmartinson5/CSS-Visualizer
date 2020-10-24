export const defaultNumberOfElements = 9;

export const defaultSelectionState = {
  selectedStyleType: 'format',
  selectedPresetType: 'flexbox',
  selectedCssType: 'selection',
};

export const defaultElementStyles = {
  misc: {
    cursor: '',
    outline: '',
    'outline-style': '',
    'outline-color': '',
    'outline-width': '',
    direction: '',
    'unicode-bidi': '',
    all: '',
  },
  content: {
    content: '',
    quotes: '',
    'list-style': '',
    'list-style-type': '',
    'list-style-image': '',
    'list-style-position': '',
  },
  text: {
    color: 'yellow',
    font: '',
    'font-family': '',
    'font-size': '',
    'font-weight': '',
    'font-style': '',
    'font-variant': '',
    'font-stretch': '',
    'font-size-adjust': '',
    'font-synthesis': '',
    'word-spacing': '',
    'text-align': '',
    'text-decoration': '',
    'text-decoration-line': '',
    'text-decoration-style': '',
    'text-decoration-color': '',
    'text-indent': '',
    'text-transform': '',
    'vertical-align': '',
    'white space': '',
  },
  format: {
    display: '',
    height: '100px',
    width: '300px',
    'min-width': '',
    'min-height': '',
    'max-width': '',
    'max-height': '',
    position: '',
    top: '',
    right: '',
    bottom: '',
    left: '',
    clip: '',
    overflow: '',
    float: '',
    clear: '',
    visibility: '',
  },
  'box-model': {
    margin: '30px',
    padding: '5px',
    border: '',
    'border-width': '',
    'border-radius': '',
    'border-color': '',
    'margin-top': '',
    'margin-right': '',
    'margin-bottom': '',
    'margin-left': '',
    'padding-top': '',
    'padding-right': '',
    'padding-bottom': '',
    'padding-left': '',
    'border-top': '',
    'border-right': '',
    'border-bottom': '',
    'border-left': '',
    'border-top-style': '',
    'border-right-style': '',
    'border-bottom-style': '',
    'border-left-style': '',
    'border-top-color': '',
    'border-right-color': '',
    'border-bottom-color': '',
    'border-left-color': '',
    'border-top-width': '',
    'border-right-width': '',
    'border-bottom-width': '',
    'border-left-width': '',
  },
  background: {
    background: '',
    'background-color': 'white',
    opacity: '',
    'background-image': '',
    'background-repeat': '',
    'background-position': '',
    'background-attachment': '',
    'background-clip': '',
    'background-origin': '',
    'background-size': '',
    'border-image': '',
    'box-shadow': 'z',
  },
};

export const defaultContainerStyles = {
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'flex-flow': 'row wrap',
  height: '100%',
  width: '100%',
  'max-width': '100%',
};

export const flexboxContainerStyles = {
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'flex-flow': 'row wrap',
  height: '100%',
  width: '100%',
  'max-width': '100%',
};

export function updateState(state, fullName, value) {
  let nameBeforePeriod = fullName;
  let nameAfterPeriod;
  const foundPeriod = fullName.includes('.');
  if (foundPeriod) {
    const index = fullName.indexOf('.');
    nameBeforePeriod = fullName.slice(0, index);
    nameAfterPeriod = fullName.slice(index + 1);
  }

  if (nameBeforePeriod in state) {
    if (foundPeriod) {
      return {
        ...state,
        [nameBeforePeriod]: updateState(Object.assign(state[nameBeforePeriod]), nameAfterPeriod, value),
      };
    }

    return {
      ...state,
      [nameBeforePeriod]: value,
    };
  } else if (!foundPeriod) {
    return {
      ...state,
      [nameBeforePeriod]: value,
    };
  }

  throw new Error(`${nameBeforePeriod} not found in ${JSON.stringify(state, null, 2)}`);
}

export const buttonStyles = {
  margin: '20px',
  'font-size': 'medium',
  border: 'none',
  'box-shadow': '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
  'border-radius': '20px',
  padding: '12px 16px',
  'background-color': 'white',
  cursor: 'pointer',
  width: '80px',
};
