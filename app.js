// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      have: false
    };
  }

  onLIClick() {
    this.setState({
      have: !this.state.have
    });
  }

  render() {

    var style = {
      textDecoration: this.state.have ? 'line-through' : 'none'
    };

    return (
    <li style={style} onClick={this.onLIClick.bind(this)}>{this.props.items}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(items =>
    <GroceryListItem items={items} />
  )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Bread', 'Milk']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));