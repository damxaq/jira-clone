import React from "react";
import "./todoCard.css";
import { Todo } from "../../models/todo";

interface PropTypes {
  todo: Todo;
  fullCard: boolean;
}

const TodoCard = ({ todo, fullCard }: PropTypes) => {
  return (
    <div className="card-container">
      <div className="title">{todo.title}</div>
      {fullCard && <div>{todo.status}</div>}
    </div>
  );
};

export default TodoCard;
