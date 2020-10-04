const defaultNumberOfElements = 3;

export const defaultSelectionState = {
  elements: defaultNumberOfElements,
  selectedElement: 0,
  selectedContainer: 0,
  selectedStyleType: 'size',
};

export const defaultElementStyles = {
  size: {
    height: '100px',
    width: '300px',
  },
  space: {
    margin: '30px',
    padding: '5px',
  },
  color: {
    'background-color': 'blue',
    color: 'yellow',
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
