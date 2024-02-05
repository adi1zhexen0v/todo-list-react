import notFoundImg from "../assets/img/not-found.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundImg} className="not-found-img" alt="Задач нет" />
      <h2 className="not-found-title">Задач нет</h2>
      <p className="not-found-text">
        У вас нет добавленных задач на данный момент!
      </p>
    </div>
  );
}

export default NotFound;
