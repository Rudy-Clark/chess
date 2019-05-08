export const SELECT = 'SELECT';
export const DESELECT = 'DESELECT';
export const MOVE = 'MOVE';

export const selectCell = id => ({
  type: SELECT,
  id,
});

export const deselect = () => ({
  type: DESELECT,
});

export const move = id => ({
  type: MOVE,
  id,
});
