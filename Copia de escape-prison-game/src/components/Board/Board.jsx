// // Tablero extraído de: https://codesandbox.io/s/sleepy-ptolemy-6p96h?file=/src/App.js

// Board.jsx
import React from "react";
import Hexagon from "../Hexagon/Hexagon";
import "./Board.css";

const r = 60;

function createBoard() {
  const rosLengthList = [5, 6, 7, 8, 9, 8, 7, 6, 5];
  return rosLengthList.map(length => new Array(length).fill(0));
}

function put(board, rowIndex, cellIndex, side) {
  const newBoard = board.map(row => [...row]);
  newBoard[rowIndex][cellIndex] = side;
  return newBoard;
}

function changeSide(side) {
  return side === "A" ? "B" : "A";
}

function reducer(state, action) {
  switch (action.type) {
    case "put":
      return {
        ...state,
        board: put(
          state.board,
          action.payload.rowIndex,
          action.payload.cellIndex,
          state.currentSide
        ),
        currentSide: changeSide(state.currentSide)
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    board: createBoard(),
    currentSide: "A"
  });

  return (
    <div className="App" style={{ width: "600px", marginTop: "35px" }}>
      <div>
        {state.board.map((row, rowIndex) => {
          return (
            <div
              style={{
                marginTop: "-8px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {row.map((side, cellIndex) => (
                <Hexagon
                  side={side}
                  style={{ height: `${r}px`, width: `${r}px` }}
                  onClick={() =>
                    dispatch({
                      type: "put",
                      payload: { rowIndex, cellIndex }
                    })
                  }
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}