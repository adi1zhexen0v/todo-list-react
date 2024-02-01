function CategoriesItem({
  category,
  index,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <li
      className={
        activeCategory === index
          ? "todo-categories-btn todo-categories-btn__active"
          : "todo-categories-btn"
      }
      onClick={() => setActiveCategory(index)}
    >
      {category}
    </li>
  );
}

export default CategoriesItem;
