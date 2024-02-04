import TodoItem from "./TodoItem";
import NotFound from "./NotFound";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.tasks.length === 0 ? (
        <NotFound />
      ) : (
        props.tasks.map((task, index) => (
          <TodoItem
            toggleTaskCompletion={props.toggleTaskCompletion}
            deleteTask={props.deleteTask}
            name={task.name}
            isCompleted={task.isCompleted}
            key={index}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
