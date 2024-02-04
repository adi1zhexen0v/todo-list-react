import notFoundImg from "../assets/img/not-found.png";

function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundImg} className="not-found-img" alt="Задач нет" />
    </div>
  );
}

export default NotFound;
