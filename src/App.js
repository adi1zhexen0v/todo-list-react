import Header from "./components/Header";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories />
          <TodoList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
