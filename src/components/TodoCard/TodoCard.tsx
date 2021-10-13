import "./todoCard.css";
import { Todo, TodoStatus, getNextStatus } from "../../models/todo";
import { useGlobalContext } from "../../App";

interface PropTypes {
  todo: Todo;
  fullCard: boolean;
}

const TodoCard = ({ todo, fullCard }: PropTypes) => {
  const { todos, setTodos } = useGlobalContext();
  const { status, title, id } = todo;

  const handleChangeStatus = () => {
    if (status !== TodoStatus.DONE) {
      const newStatus = getNextStatus(status);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        )
      );
    }
  };

  return (
    <div className="card-container" onClick={handleChangeStatus}>
      <div className="title">{title}</div>
      {fullCard && <div>{status}</div>}
    </div>
  );
};

export default TodoCard;
