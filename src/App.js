import { useState } from 'react';

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function printWinner(winner){
  console.log("The game is over: the winer is player: " + winner);
}

function checkWinCondition(squaresArr){
  var winnerDetected = true;

  if (squaresArr[0] == squaresArr[1] && squaresArr[1] == squaresArr[2] && squaresArr[0] !== null)
  {
    printWinner(squaresArr[0]);
  }
  else if (squaresArr[3] == squaresArr[4] && squaresArr[4] == squaresArr[5] && squaresArr[3] !== null){
    printWinner(squaresArr[3]);
  }
  else if (squaresArr[6] == squaresArr[7] && squaresArr[7] == squaresArr[8] && squaresArr[6] !== null){
    printWinner(squaresArr[6]);
  }
  else if (squaresArr[0] == squaresArr[3] && squaresArr[3] == squaresArr[6]  && squaresArr[0] !== null)
  {
    printWinner(squaresArr[0]);
  }
  else if (squaresArr[1] == squaresArr[4] && squaresArr[4] == squaresArr[7]  && squaresArr[1] !== null){
    printWinner(squaresArr[1]);
  }
  else if (squaresArr[2] == squaresArr[5] && squaresArr[5] == squaresArr[8]  && squaresArr[2] !== null){
    printWinner(squaresArr[2]);
  }
  else if (squaresArr[0] == squaresArr[4] && squaresArr[4] == squaresArr[8]  && squaresArr[0] !== null){
    printWinner(squaresArr[0]);
  }
  else if (squaresArr[2] == squaresArr[4] && squaresArr[4] == squaresArr[6]  && squaresArr[2] !== null){
    printWinner(squaresArr[2]);
  }
  else{
    winnerDetected = false;
  }

  var checkIfIsNull = false;

  squaresArr.forEach(el => {
    if(el == null){
      checkIfIsNull = true;
    }
  });

  if (winnerDetected == false){
    if (checkIfIsNull){
      console.log("There is now winner - move next");
    }
    else{
      console.log("The game is over - there is no winner.")
    }
  }
  return winnerDetected;
  
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(_index) {

    var nextIsX = false;
    var xCounter = 0
    var oCounter = 0

    squares.forEach(el => {
      if (el == "x") {
        xCounter ++;
      }
      else if (el == "o"){
        oCounter ++;
      }
    });   

    if (xCounter <= oCounter){
      nextIsX = true;
    }

    const nextSquares = squares.slice();
    var nexSquareEnable = !checkWinCondition(nextSquares);
      if (nextSquares[_index] == null && nexSquareEnable){
      if (nextIsX){
        nextSquares[_index] = "x";
      }
      else{
        nextSquares[_index] = "o";
      }
    }
    
    setSquares(nextSquares);
    checkWinCondition(squares)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick= {() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick= {() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick= {() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick= {() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick= {() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick= {() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick= {() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick= {() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick= {() => handleClick(8)}/>
      </div>
    </>
  );
}