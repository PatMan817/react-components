// TODO
function GroceryListItem({ item }) {
  const [have, setHave] = React.useState(false);

  function onLIClick() {
    setHave(!have);
  }

  const style = {
    textDecoration: have ? "line-through" : "none",
  };

  return (
    <li style={style} onClick={onLIClick}>
      {item}
    </li>
  );
}

function GroceryList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h2>My Grocery List</h2>
      <GroceryList items={["Bread", "Milk"]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
