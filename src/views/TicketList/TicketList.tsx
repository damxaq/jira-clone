import React from "react";
import "./ticketList.css";
import TodoCard from "../../components/TodoCard/TodoCard";
import { Todo } from "../../models/todo";

interface PropTypes {
  todos?: Array<Todo>;
}

const TicketList = ({ todos }: PropTypes) => {
  return (
    <div>
      <header className="section-header">Ticket List</header>
      <div className="tickets-frame">
        {todos &&
          todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} fullCard={true} />
          ))}
      </div>
    </div>
  );
};

export default TicketList;
