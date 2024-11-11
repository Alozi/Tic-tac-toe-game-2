import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedSquare(colIndex, rowIndex) {
    setGameBoard((prevGameboard) => {
      const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])];
      updatedBoard[colIndex][rowIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, colIndex) => (
        <li key={colIndex}>
          <ol>
            {row.map((playerSymbol, rowIndex) => (
              <li key={rowIndex}>
                <button
                  onClick={() => handleSelectedSquare(colIndex, rowIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
