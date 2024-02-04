import Header from "./components/Header";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useState } from "react";

const categories = ["Все", "Завершенные", "Не завершенные"];

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  function toggleTaskCompletion(name) {
    const updatedTasks = tasks.map((task) => {
      if (task.name === name) {
        return {
          name,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask(name) {
    const newTask = {
      name,
      isCompleted: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  function deleteTask(name) {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
  }

  function sortingTasks() {
    if (activeCategory === 2) {
      return tasks.filter((task) => !task.isCompleted);
    } else if (activeCategory === 1) {
      return tasks.filter((task) => task.isCompleted);
    } else {
      return tasks;
    }
  }

  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <TodoList
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            tasks={sortingTasks()}
          />
        </div>
        <Footer addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
