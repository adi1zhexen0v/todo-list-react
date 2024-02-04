import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TodoItem({ isCompleted, name, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={isCompleted ? "todo todo__completed" : "todo"}>
      <span className="todo-border"></span>
      <div className="todo-part">
        <div
          className="todo-toggle__outer"
          onClick={() => toggleTaskCompletion(name)}
        >
          {isCompleted ? <div className="todo-toggle__inner"></div> : null}
        </div>
        <h4 className="todo-title">{name}</h4>
      </div>
      <div className="todo-part">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="todo-delete"
          onClick={() => deleteTask(name)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
