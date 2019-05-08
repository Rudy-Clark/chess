import _random from 'lodash/random';
import { SELECT, DESELECT, MOVE } from '../actions';

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

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 64; i++) {
  const black = ((i % 8) + Math.floor(i / 8)) % 2 === 1;
  initialState.push({
    id: generateId(5),
    canMove: false,
    black,
    knightHere: false,
  });
}

const reducerCell = (state = initialState, action) => {
  switch (action.type) {
    case SELECT: {
      const knight = state.filter(cell => cell.knightHere);
      if (knight.length) return state;
      return state.map(cell => {
        const newCell = { ...cell, knightHere: false };
        if (newCell.id === action.id) newCell.knightHere = !newCell.knightHere;
        return newCell;
      });
    }
    case DESELECT:
      return state.map(cell => ({ ...cell, knightHere: false }));
    case MOVE:
      return state.map(cell => {
        const newCell = { ...cell, knightHere: false };
        if (newCell.id === action.id) newCell.knightHere = true;
        return newCell;
      });
    default:
      return state;
  }
};

export default reducerCell;
