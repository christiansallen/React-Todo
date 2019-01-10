import React from "react";
import ToDos from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const ToDoList = [
  {
    toDo: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    toDo: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItem: "",
      toDoList: ToDoList
    };
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  completed = id => {
    this.setState({
      toDoList: this.state.toDoList.map(todo => {
        if (id !== todo.id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  addToDo = e => {
    e.preventDefault();
    if (this.state.toDoItem.length === 0) return;
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { toDo: this.state.toDoItem, id: Date.now(), completed: false }
      ],
      toDoItem: ""
    });
  };

  deleteToDo = e => {
    e.preventDefault();
    const notCompleted = this.state.toDoList.filter(
      todo => todo.completed !== true
    );
    this.setState({
      toDoList: notCompleted
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">ToDo List</h1>
        <ToDos ToDoList={this.state.toDoList} completed={this.completed} />
        <ToDoForm
          change={this.change}
          addToDo={this.addToDo}
          toDoItem={this.state.toDoItem}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
