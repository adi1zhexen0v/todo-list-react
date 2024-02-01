import CategoriesItem from "./CategoriesItem";

function Categories(props) {
  return (
    <ul className="todo-categories">
      {props.categories.map((category, index) => (
        <CategoriesItem
          category={category}
          index={index}
          activeCategory={props.activeCategory}
          setActiveCategory={props.setActiveCategory}
        />
      ))}
    </ul>
  );
}

export default Categories;
