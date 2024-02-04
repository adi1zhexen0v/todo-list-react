import { useState } from "react";

function Footer({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  function toogleForm() {
    setIsOpen(!isOpen);
  }

  function handleClickAddTask() {
    if (taskInput.length !== 0) {
      addTask(taskInput);
      setTaskInput("");
    }
  }

  function changeTaskInput(event) {
    setTaskInput(event.target.value);
  }

  return (
    <footer className="app-footer">
      {isOpen ? (
        <form action="#" className="form">
          <input
            type="text"
            placeholder="Введите..."
            value={taskInput}
            className="form-input"
            onChange={(event) => changeTaskInput(event)}
          />
          <button className="form-btn" onClick={handleClickAddTask}>
            Добавить
          </button>
        </form>
      ) : (
        <div></div>
      )}
      <button className="footer-btn" onClick={toogleForm}>
        {isOpen ? "-" : "+"}
      </button>
    </footer>
  );
}

export default Footer;
