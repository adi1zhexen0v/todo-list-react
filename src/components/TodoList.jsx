import TodoItem from "./TodoItem";

const tasks = [
  {
    name: "Дописать статью",
    isCompleted: false,
    isFavorite: true,
  },
  {
    name: "Скачать сериал",
    isCompleted: true,
    isFavorite: false,
  },
  {
    name: "Прочитать 3 главу книги",
    isCompleted: true,
    isFavorite: false,
  },
  {
    name: "Приготовить ужин",
    isCompleted: false,
    isFavorite: false,
  },
];

function TodoList() {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem name={task.name} isCompleted={task.isCompleted} key={index} />
      ))}
    </ul>
  );
}

export default TodoList;
