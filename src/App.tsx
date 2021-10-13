import React, { useState, useEffect, useContext, createContext } from "react";
import TicketList from "./views/TicketList/TicketList";
import Board from "./views/Board/Board";
import { fetchTodosWithLimit } from "./utils/todos.api";
import { Todo } from "./models/todo";

interface GlobalContent {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const AppContext = createContext<GlobalContent>({
  todos: [],
  setTodos: () => {},
});

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

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
    <AppContext.Provider value={{ todos, setTodos }}>
      <div className="main-container">
        <TicketList />
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, App };
