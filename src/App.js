import Header from "./components/Header";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { useState } from "react";

const categories = ["Все", "Завершенные", "Не завершенные"];

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Дописать статью",
      isCompleted: false,
    },
    {
      name: "Скачать сериал",
      isCompleted: true,
    },
  ]);
  const [activeCategory, setActiveCategory] = useState(0);

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
          <TodoList tasks={sortingTasks()} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
