import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        onChange={props.change}
        type="text"
        placeholder="Type New ToDo Here"
        value={props.toDoItem}
        name="toDoItem"
      />
      <button onClick={props.addToDo}>Add ToDo</button>
      <button onClick={props.deleteToDo}>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
