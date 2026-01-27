import { useState } from "react";

// Defines a single square to avoid duplicate code
// Pass in the value and functioin onSquareClick as component props
function Square({value, onSqureClick}) {
  return <button className="square" onClick={onSqureClick} >{value}</button>;
}

//defines the game board
export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "x";

    // Set the value of the "nextSquare"
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSqureClick={() => handleClick(0)} />
        <Square value={squares[1]} onSqureClick={() => handleClick(1)} />
        <Square value={squares[2]} onSqureClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSqureClick={() => handleClick(3)} />
        <Square value={squares[4]} onSqureClick={() => handleClick(4)} />
        <Square value={squares[5]} onSqureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSqureClick={() => handleClick(6)} />
        <Square value={squares[7]} onSqureClick={() => handleClick(7)} />
        <Square value={squares[8]} onSqureClick={() => handleClick(8)} />
      </div>
    </>
  );
}
