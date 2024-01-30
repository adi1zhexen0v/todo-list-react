import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TodoItem({ name, isCompleted }) {
  return (
    <li className={isCompleted ? "todo todo__completed" : "todo"}>
      <span className="todo-border"></span>
      <div className="todo-part">
        <div className="todo-toggle__outer">
          {isCompleted ? <div className="todo-toggle__inner"></div> : null}
        </div>
        <h4 className="todo-title">{name}</h4>
      </div>
      <div className="todo-part">
        <FontAwesomeIcon icon={faTrashCan} className="todo-delete" />
        <FontAwesomeIcon icon={faStar} className="todo-star" />
      </div>
    </li>
  );
}

export default TodoItem;