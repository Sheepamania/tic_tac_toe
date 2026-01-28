import { useState } from "react";

// Defines a single square to avoid duplicate code
// Pass in the value and functioin onSquareClick as component props
function Square({value, onSqureClick}) {
  return <button className="square" onClick={onSqureClick} >{value}</button>;
}

//defines the game board
export default function Board() {

  //Each time a player moves, bool xIsNext will be flipped 
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    
    if(squares[i]){
      return; 
    }

    const nextSquares = squares.slice();

    if (xIsNext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }


    // Set the value of the "nextSquare"
    setSquares(nextSquares);
    setXIsNext(!xIsNext); //flips the bool after each turn
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


// Calculate the winner of the game and return X, O or null 
function calculateWinner(squares){

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0 ; i < lines.length ; i++ ){
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null;
}
