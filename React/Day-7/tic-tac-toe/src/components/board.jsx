import { useState } from "react";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(board) {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  }

  const winner = checkWinner(board)
  const isDraw = !winner && board.every((square) => square !== null)


  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];

    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);

    setIsXTurn(!isXTurn);
  }
  function restartGame(){
    setBoard(Array(9).fill(null))
    setIsXTurn(true)
  }

  return (
    <>
      {!winner && !isDraw && (
        <h2>
            Current Turn: {isXTurn ? "X" : "O"}
        </h2>
      )}  

      {winner && (
        <h2 className="winner">
          🏆 Winner: {winner}
        </h2>
      )}

      {isDraw && (
        <h2 className="draw">
            Match Draw!
        </h2>
      )}

      <div className="board">
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className="restart"
      onClick={restartGame}>
        Restart Game
      </button>
    </>
  );
}

export default Board;