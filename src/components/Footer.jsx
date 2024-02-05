import { useState } from "react";

function Footer({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  

  function toogleForm() {
    setIsOpen(!isOpen);
  }

  function handleSubmitAddTask(event) {
    event.preventDefault();
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
        <form
          action="#"
          className="form"
          onSubmit={(event) => handleSubmitAddTask(event)}
        >
          <input
            type="text"
            placeholder="Введите..."
            value={taskInput}
            className="form-input"
            onChange={(event) => changeTaskInput(event)}
          />
          <button className="form-btn">Добавить</button>
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
