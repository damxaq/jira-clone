import "./ticketList.css";
import TodoCard from "../../components/TodoCard/TodoCard";
import { useGlobalContext } from "../../App";

const TicketList = () => {
  const { todos } = useGlobalContext();

  return (
    <div>
      <header className="section-header">Ticket List</header>
      <div className="tickets-frame">
        {todos &&
          todos
            .sort((a, b) => {
              if (a.status > b.status) {
                return -1;
              } else if (a.status < b.status) {
                return 1;
              }
              return 0;
            })
            .map((todo) => (
              <TodoCard key={todo.id} todo={todo} fullCard={true} />
            ))}
      </div>
    </div>
  );
};

export default TicketList;
