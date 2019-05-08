import { createSelector } from 'reselect';

const getCells = cells => cells.map(cell => ({ ...cell, canMove: false }));

/**
 * return coords from Array index
 * @param {Number} index
 * @return {Number[]}
 */
const toCoords = index => {
  const x = index % 8;
  const y = Math.floor(index / 8);
  return [x, y];
};

export const getFilteredCells = createSelector(
  [getCells],
  cells => {
    let knightIndex;
    /**
     * @param {Object} cell
     * @param {Number} ind
     * @return {Boolean}
     */
    const setIndex = (cell, ind) => {
      if (cell.knightHere) {
        knightIndex = ind;
        return true;
      }
      return false;
    };
    const knights = cells.filter((cell, ind) => setIndex(cell, ind));

    if (!knights.length) return cells;
    const canMove = iterateInd => {
      const [toX, toY] = toCoords(iterateInd);
      const [kngX, kngY] = toCoords(knightIndex);
      const dx = toX - kngX;
      const dy = toY - kngY;
      return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
      );
    };

    return cells.map((cell, ind) => {
      const newCell = { ...cell, canMove: false };
      if (canMove(ind)) newCell.canMove = true;
      return newCell;
    });
  },
);
