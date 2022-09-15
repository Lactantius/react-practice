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

function Board({ nrows = 5, ncols = 5, chanceCellClicked = 0.5 }) {
  const [board, setBoard] = useState(
    createBoard(nrows, ncols, chanceCellClicked)
  );

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(height, width, chanceClick) {
    /*     const createRow = (nCells, chance) =>
      Array.from({ length: nCells }, (cell) =>
        Math.random() < chance ? true : false
      );
    const board = Array.from({ length: height }, (row) =>
      createRow(width, chanceLit)
    ); */
    // board.forEach(row => row.forEach(cell => flipCellsAround(cell)))

    const board = Array.from({ length: height }, (row) =>
      Array.from({ length: width }, (cell) => false)
    );

    /** Some functional way would be cool, but can't think of any simple way right now */
    board.forEach((row, rowIdx) =>
      row.forEach((cell, cellIdx) =>
        Math.random() < chanceClick
          ? flipCellsAround(board, rowIdx, cellIdx)
          : null
      )
    );

    return board;
  }

  /** Check if every cell is false */
  function hasWon(gameBoard) {
    return gameBoard.every((row) => row.every((cell) => !cell));
  }

  /** Sad, mutating function */
  function flipCellsAround(gameBoard, y, x) {
    const flipCell = (y, x, gBoard) => {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        gBoard[y][x] = !gBoard[y][x];
      }
    };

    flipCell(y, x, gameBoard);
    flipCell(y - 1, x, gameBoard);
    flipCell(y + 1, x, gameBoard);
    flipCell(y, x - 1, gameBoard);
    flipCell(y, x + 1, gameBoard);
  }

  function updateBoardOnClick(coord) {
    setBoard((oldBoard) => {
      const [yCoord, xCoord] = coord.split("-").map(Number);
      const newBoard = oldBoard.map((row) => row.slice());
      flipCellsAround(newBoard, yCoord, xCoord);
      return newBoard;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  function winMessage() {
    return <div className="Board-win">You won!</div>;
  }

  function resetBoard() {
    setBoard((old) => createBoard(nrows, ncols, chanceCellClicked));
  }

  // make table board

  function renderBoard() {
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
                    updateBoardOnClick(`${rowIdx}-${cellIdx}`)
                  }
                ></Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      {hasWon(board) ? winMessage() : renderBoard()}
      <button className="Board-button" onClick={resetBoard}>New Game?</button>
    </>
  );
}

export default Board;
