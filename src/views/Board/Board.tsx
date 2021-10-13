import React from "react";
import "./board.css";
import BoardColumn from "../../components/BoardColumn/BoardColumn";

const Board = () => {
  return (
    <div>
      <header className="section-header">Board</header>
      <div className="board-frame">
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </div>
    </div>
  );
};

export default Board;
