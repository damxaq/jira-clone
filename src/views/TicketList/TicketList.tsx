import React from "react";
import "./ticketList.css";
import TodoCard from "../../components/TodoCard/TodoCard";

const TicketList = () => {
  return (
    <div>
      <header className="section-header">Ticket List</header>
      <div className="tickets-frame">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TicketList;
