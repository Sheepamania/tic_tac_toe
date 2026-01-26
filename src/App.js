import { useState } from "react";

//defines a single square to avoid duplicate code
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("x");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

//defines the game board
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
