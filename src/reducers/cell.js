import _random from 'lodash/random';

const initialState = [];

// Generate unique id
const generateId = length => {
  const symbols = 'ABCDEFGHKLMNOPRSTQUVXYZWabcdefghklmnoprstquvxyzw1234567890';
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += symbols.charAt(_random(0, symbols.length - 1));
  }
  return result;
};

const cell = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT':
      return state;
    default:
      return state;
  }
};

export default cell;
