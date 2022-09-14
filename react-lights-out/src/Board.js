import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(
    createBoard(nrows, ncols, chanceLightStartsOn)
  );

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(height, width, chanceLit) {
    const createRow = (nCells, chance) =>
      Array.from({ length: nCells }, (cell) =>
        Math.random() < chance ? true : false
      );
    const board = Array.from({ length: height }, (row) =>
      createRow(width, chanceLit)
    );
    return board;
  }

  /** Check if every cell is false */
  function hasWon(board) {
    return board.every((row) => row.every((cell) => !cell));
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const newBoard = oldBoard.map( row => row.slice() );

      flipCell(y, x, newBoard);
      flipCell(y - 1, x, newBoard);
      flipCell(y + 1, x, newBoard);
      flipCell(y, x - 1, newBoard);
      flipCell(y, x + 1, newBoard);

      return newBoard;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  return (
    <table className="Board">
      <tbody>
        {board.map((row, rowIdx) => (
          <tr key={String(rowIdx)}>
            {row.map((cell, cellIdx) => (
              <Cell
                isLit={cell}
                key={`${rowIdx}-${cellIdx}`}
                flipCellsAroundMe={() =>
                  flipCellsAround(`${rowIdx}-${cellIdx}`)
                }
              ></Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Board;
