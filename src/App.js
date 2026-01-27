import { useState } from "react";

// Defines a single square to avoid duplicate code
// Pass in the value and functioin onSquareClick as component props
function Square({value, onSqureClick}) {
  return <button className="square" onClick={onSqureClick} >{value}</button>;
}

//defines the game board
export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0] = "x";

    // Set the value of the "nextSquare"
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSqureClick={handleClick} />
        <Square value={squares[1]} onSqureClick={handleClick} />
        <Square value={squares[2]} onSqureClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSqureClick={handleClick} />
        <Square value={squares[4]} onSqureClick={handleClick} />
        <Square value={squares[5]} onSqureClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSqureClick={handleClick} />
        <Square value={squares[7]} onSqureClick={handleClick} />
        <Square value={squares[8]} onSqureClick={handleClick} />
      </div>
    </>
  );
}
