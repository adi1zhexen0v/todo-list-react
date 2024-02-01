import TodoItem from "./TodoItem";

// const tasks = [
//   {
//     name: "Прочитать 3 главу книги",
//     isCompleted: true,
//   },
//   {
//     name: "Приготовить ужин",
//     isCompleted: false,
//   },
// ];

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.tasks.map((task, index) => (
        <TodoItem name={task.name} isCompleted={task.isCompleted} key={index} />
      ))}
    </ul>
  );
}

export default TodoList;
