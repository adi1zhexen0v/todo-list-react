import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import classnames from "classnames";

// React Hook Form (Formik) - работа с формами
// Axios - взаимодействия с сервером
// ClassNames - работы с классами

function TodoItem({ isCompleted, name, toggleTaskCompletion, deleteTask }) {
  return (
    // использование classnames
    <li className={classnames("todo", { todo__completed: isCompleted })}>
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
