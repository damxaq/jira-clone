import "./board.css";
import BoardColumn from "../../components/BoardColumn/BoardColumn";
import { TodoStatus } from "../../models/todo";
import { useGlobalContext } from "../../App";

const Board = () => {
  const { todos } = useGlobalContext();

  return (
    <div>
      <header className="section-header">Board</header>
      <div className="board-frame">
        {todos && (
          <>
            <BoardColumn
              todos={todos.filter((todo) => todo.status === TodoStatus.TODO)}
              header={TodoStatus.TODO}
            />
            <BoardColumn
              todos={todos.filter(
                (todo) => todo.status === TodoStatus.IN_PROGRESS
              )}
              header={TodoStatus.IN_PROGRESS}
            />
            <BoardColumn
              todos={todos.filter((todo) => todo.status === TodoStatus.DONE)}
              header={TodoStatus.DONE}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
