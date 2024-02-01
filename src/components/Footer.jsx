import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  function toogleForm() {
    setIsOpen(!isOpen);
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
          <button className="form-btn">Добавить</button>
        </form>
      ) : null}
      <button className="footer-btn" onClick={toogleForm}>
        +
      </button>
    </footer>
  );
}

export default Footer;
