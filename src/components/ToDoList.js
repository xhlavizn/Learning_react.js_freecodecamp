import React from "react";
import todosData from "./todosData";

function TodoItem(props) {
  return (
    <div className="todoitem">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => console.log("Hovno z prdele")}
      />

      <h2> {props.todo.name} </h2>
      <h3> {props.todo.completed} </h3>
    </div>
  );
}

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = { todos: todosData };
  }

  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div>{todoComponents}</div>;
  }
}

export default ToDoList;
