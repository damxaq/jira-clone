import { useState, useEffect } from "react";
import TicketList from "./views/TicketList/TicketList";
import Board from "./views/Board/Board";
import { fetchTodosWithLimit } from "./utils/todos.api";
import { Todo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>();

  const fetchTodos = async () => {
    const todosData = await fetchTodosWithLimit();
    if (todosData !== undefined) {
      setTodos(todosData);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="main-container">
      <TicketList todos={todos} />
      <Board todos={todos} />
    </div>
  );
}

export default App;
